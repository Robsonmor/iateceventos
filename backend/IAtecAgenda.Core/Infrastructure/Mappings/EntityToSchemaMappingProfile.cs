using AutoMapper;
using IAtecAgenda.Core.Extensions;
using IAtecAgenda.Domain.Contracts.Schemas.GrupoOperacao;
using IAtecAgenda.Domain.Contracts.Schemas.Modulo;
using IAtecAgenda.Domain.Contracts.Schemas.Operacao;
using IAtecAgenda.Domain.Contracts.Schemas.Perfil;
using IAtecAgenda.Domain.Contracts.Schemas.PerfilModulo;
using IAtecAgenda.Domain.Contracts.Schemas.Usuario;
using IAtecAgenda.Domain.Entities;
using IAtecAgenda.Domain.Enumerations;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IAtecAgenda.Core.Infrastructure.Mappings
{
    internal sealed class EntityToSchemaMappingProfile : Profile
    {

        public EntityToSchemaMappingProfile()
            : base("EntityToSchemaMappingProfile")
        {

            #region Operacao Mappers

            CreateMap<Operacao, OperacaoBasicSchema>()
                .ForMember(dest => dest.OperacaoId, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Nome, opts => opts.MapFrom(src => src.Nome))
                .ForMember(dest => dest.Descricao, opts => opts.MapFrom(src => src.Descricao))
                .ForMember(dest => dest.Local, opts => opts.MapFrom(src => src.Local))
                .ForMember(dest => dest.Data, opts => opts.MapFrom(src => src.Data))
                .ForMember(dest => dest.TipoEvento, opts => opts.MapFrom(src => src.TipoEvento))
                .ForAllOtherMembers(dest => dest.Ignore());

            CreateMap<Operacao, OperacaoSchema>()
                .ForMember(dest => dest.OperacaoId, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Nome, opts => opts.MapFrom(src => src.Nome))
                .ForMember(dest => dest.Descricao, opts => opts.MapFrom(src => src.Descricao))
                .ForMember(dest => dest.Local, opts => opts.MapFrom(src => src.Local))
                .ForMember(dest => dest.Data, opts => opts.MapFrom(src => src.Data))
                .ForMember(dest => dest.TipoEvento, opts => opts.MapFrom(src => src.TipoEvento))
                //  .ForMember(dest => dest.Atividades, opts => opts.MapFrom(src => src.Atividades))
                .ForMember(dest => dest.Grupo, opts => opts.MapFrom(src => src.OperacaoGrupo))
                .ForAllOtherMembers(dest => dest.Ignore());

            CreateMap<Operacao, ListAllOperacaoSchema>()
                .ForMember(dest => dest.OperacaoId, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Nome, opts => opts.MapFrom(src => src.Nome))
                 .ForMember(dest => dest.Descricao, opts => opts.MapFrom(src => src.Descricao))
                .ForMember(dest => dest.Local, opts => opts.MapFrom(src => src.Local))
                .ForMember(dest => dest.Data, opts => opts.MapFrom(src => src.Data))
                .ForMember(dest => dest.TipoEvento, opts => opts.MapFrom(src => src.TipoEvento))
                .ForMember(dest => dest.Grupo, opts => opts.MapFrom(src => src.OperacaoGrupo))
                .ForAllOtherMembers(dest => dest.Ignore());

            CreateMap<Operacao, GetAllOperacaoSchema>()
                .ForMember(dest => dest.OperacaoId, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Nome, opts => opts.MapFrom(src => src.Nome))
                 .ForMember(dest => dest.Descricao, opts => opts.MapFrom(src => src.Descricao))
                .ForMember(dest => dest.Local, opts => opts.MapFrom(src => src.Local))
                .ForMember(dest => dest.Data, opts => opts.MapFrom(src => src.Data))
                .ForMember(dest => dest.TipoEvento, opts => opts.MapFrom(src => src.TipoEvento))
                .ForMember(dest => dest.Grupo, opts => opts.MapFrom(src => src.OperacaoGrupo))
                //  .ForMember(dest => dest.Atividades, opts => opts.MapFrom(src => src.Atividades))
                .ForAllOtherMembers(dest => dest.Ignore());

            #endregion

            #region PerfilModulo Mappers

            CreateMap<PerfilModulo, PerfilModuloSchema>()
                .ForMember(dest => dest.Modulo, opts => opts.MapFrom(src => src.Modulo))
                .ForMember(dest => dest.Perfil, opts => opts.MapFrom(src => src.Perfil))
                .ForAllOtherMembers(dest => dest.Ignore());

            #endregion

            #region Perfil Mappers

            CreateMap<Perfil, PerfilSchema>()
                .ForMember(dest => dest.PerfilId, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Nome, opts => opts.MapFrom(src => src.Name))
                .ForMember(dest => dest.Modulos, opts => opts.MapFrom(src => src.Modulos))
                .ForAllOtherMembers(dest => dest.Ignore());

            #endregion        

            #region Modulo Mappers

            CreateMap<Modulo, ModuloSchema>()
                .ForMember(dest => dest.ModuloId, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Nome, opts => opts.MapFrom(src => src.Nome))
                .ForAllOtherMembers(dest => dest.Ignore());

            #endregion

            #region OperacaoGrupo Mappers

            CreateMap<OperacaoGrupo, ListAllOperacaoGrupoSchema>()
                .ForMember(dest => dest.OperacaoGrupoId, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Nome, opts => opts.MapFrom(src => src.Nome))
                .ForAllOtherMembers(dest => dest.Ignore());

            CreateMap<OperacaoGrupo, OperacaoGrupoSchema>()
                .ForMember(dest => dest.OperacaoGrupoId, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Nome, opts => opts.MapFrom(src => src.Nome))
                .ForMember(dest => dest.Operacoes, opts => opts.MapFrom(src => src.Operacoes))
                .MaxDepth(1)
                .ForAllOtherMembers(dest => dest.Ignore());

            #endregion



            #region UsuarioSchema Mappers
            CreateMap<Usuario, UsuarioSchema>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Matricula, opts => opts.MapFrom(src => src.UserName))
                .ForMember(dest => dest.Login, opts => opts.MapFrom(src => src.UserName))
                .ForMember(dest => dest.NomeCompleto, opts => opts.MapFrom(src => $"{src.Name} {src.Surname}"))
                .ForMember(dest => dest.Status, opts => opts.MapFrom(src => ConvertStatusString(src.StatusId)))
                .ForMember(dest => dest.StatusId, opts => opts.MapFrom(src => src.StatusId))
                .ForMember(dest => dest.PerfilId, opts => opts.MapFrom(src => src.Roles.FirstOrDefault().RoleId))
                .ForMember(dest => dest.Perfil, opts => opts.MapFrom(src => ConvertPerfilString(src.Roles)))
                .ForMember(dest => dest.Email, opts => opts.MapFrom(src => src.Email))
                .ForAllOtherMembers(dest => dest.Ignore());


            #endregion
        }

        private string ConvertPerfilString(ICollection<IdentityUserRole<string>> list)
        {
            return string.Join(",", list.Select(x => ((EnumPerfil)int.Parse(x.RoleId)).ToDescription()));
        }
        private string ConvertStatusString(int statusId)
        {
            if (!Enum.IsDefined(typeof(EnumUsuarioStatus), statusId))
                return null;

            return ((EnumUsuarioStatus)statusId).ToDescription();
        }
    }
}