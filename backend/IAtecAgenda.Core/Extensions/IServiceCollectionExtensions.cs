using AutoMapper;
using FluentValidation;
using IAtecAgenda.Core.Data;
using IAtecAgenda.Core.Helpers;
using IAtecAgenda.Core.Infrastructure;
using IAtecAgenda.Domain.Constants;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Interfaces.Business;
using IAtecAgenda.Domain.Interfaces.Business.Services;
using IAtecAgenda.Domain.Interfaces.Data.Repositories;
using IAtecAgenda.Domain.Interfaces.DataWarehouse.DataContext;
using IAtecAgenda.Domain.Interfaces.DataWarehouse.DataHelper;
using IAtecAgenda.Domain.Interfaces.DataWarehouse.DataService;
using IAtecAgenda.Domain.Interfaces.DataWarehouse.DataStorage;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System;
using System.Data.SqlClient;
using System.Reflection;

namespace IAtecAgenda.Core.Extensions
{
    public static class IServiceCollectionExtensions
    {
        #region Extension Methods

        public static IServiceCollection AddCoreDependencies(this IServiceCollection services, bool enableSensitiveData = false)
        {
            AutoMapperConfig.Configure();
            ConfigHelper.TryGet($"ConnectionStrings:{nameof(EFContext)}", out string connectionString);

            // Registra o contexto do EFCore
            services.AddDbContext<EFContext>(options =>
            {
                options.UseSqlServer(connectionString);
                options.EnableSensitiveDataLogging(enableSensitiveData);
            });

            // Registra o contexto do IdentityCore
            services
                .AddIdentity<Usuario, Perfil>(options =>
                {
                    options.User.RequireUniqueEmail = false;
                    options.User.AllowedUserNameCharacters = @"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._\";
                })
                .AddEntityFrameworkStores<EFContext>()
                .AddDefaultUI(UIFramework.Bootstrap4)
                .AddErrorDescriber<PortugueseIdentityErrorDescriber>()
                .AddDefaultTokenProviders();

            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();

            services.AddScoped<IUrlHelper>(x =>
            {
                var actionContext = x.GetRequiredService<IActionContextAccessor>().ActionContext;
                var factory = x.GetRequiredService<IUrlHelperFactory>();
                return factory.GetUrlHelper(actionContext);
            });

           
            services.AddScoped<IUserClaimsPrincipalFactory<Usuario>, ClaimsIdentityFactory>();
            services.AddDataProtection().SetApplicationName(IdentityServerApiConstants.ResourceName);
            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            // Registra as camadas lógicas da aplicação
            services.Scan(scan => scan
                .FromAssemblies(Assembly.GetExecutingAssembly())
                    .AddClasses(c => c.AssignableTo(typeof(IBaseRepository)))
                        .AsImplementedInterfaces()
                        .WithTransientLifetime()
                    .AddClasses(c => c.AssignableTo(typeof(IValidator<>)))
                        .AsImplementedInterfaces()
                        .WithTransientLifetime()
                    .AddClasses(c => c.AssignableTo(typeof(IBaseService)))
                        .AsImplementedInterfaces()
                        .WithTransientLifetime()
                    .AddClasses(c => c.AssignableTo<IUnitOfWork>())
                        .AsImplementedInterfaces()
                        .WithTransientLifetime()
                );

            return services;
        }

        public static IServiceCollection AddDataWarehouseDependencies(this IServiceCollection services)
        {
            services.AddSingleton(provider => new Func<SqlConnection>(() =>
            {
                ConfigHelper.TryGet($"ConnectionStrings:{nameof(EFContext)}", out string connectionString);
                return new SqlConnection(connectionString);
            }));

            // Registra as camadas lógicas do data warehouse
            services.Scan(scan => scan
                .FromAssemblies(Assembly.GetExecutingAssembly())
                    .AddClasses(c => c.AssignableTo(typeof(IDataContext)))
                        .AsImplementedInterfaces()
                        .WithTransientLifetime()
                    .AddClasses(c => c.AssignableTo(typeof(IGenericDataHelper)))
                        .AsImplementedInterfaces()
                        .WithTransientLifetime()
                    .AddClasses(c => c.AssignableTo(typeof(IGenericDataStorage<>)))
                        .AsImplementedInterfaces()
                        .WithTransientLifetime()                 
                    .AddClasses(c => c.AssignableTo(typeof(IGenericDataService<,,>)))
                        .AsImplementedInterfaces()
                        .WithTransientLifetime()
                );

            return services;
        }

        public static IServiceCollection AddConsumerDependencies(this IServiceCollection services)
        {
            services.AddMemoryCache();         

            return services;
        }      
        #endregion
    }
}
