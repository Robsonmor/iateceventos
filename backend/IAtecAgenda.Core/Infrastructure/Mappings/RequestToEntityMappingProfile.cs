using AutoMapper;
using IAtecAgenda.Domain.Contracts.Requests.Operacao;
using IAtecAgenda.Domain.Contracts.Requests.OperacaoGrupo;
using IAtecAgenda.Domain.Entities;
using System.Linq;

namespace IAtecAgenda.Core.Infrastructure.Mappings
{
    public class RequestToEntityMappingProfile : Profile
    {
        public RequestToEntityMappingProfile()
            : base("RequestToEntityMappingProfile")
        {

           

            #region Operacaogrupo Mappers

            CreateMap<PostOperacaoGrupoRequest, OperacaoGrupo>()
                .ForMember(dest => dest.Nome, opts => opts.MapFrom(src => src.Nome))
                .ForAllOtherMembers(dest => dest.Ignore());

            CreateMap<PutOperacaoGrupoRequest, OperacaoGrupo>()
                .ForMember(dest => dest.Nome, opts => opts.MapFrom(src => src.Nome))
                .ForAllOtherMembers(dest => dest.Ignore());

            #endregion

            #region Operacao Mappers

            CreateMap<PostOperacaoRequest, Operacao>()
                .ForMember(dest => dest.OperacaoGrupoId, opts => opts.MapFrom(src => src.OperacaoGrupoId))
                .ForMember(dest => dest.Nome, opts => opts.MapFrom(src => src.Nome))
                .ForMember(dest => dest.Descricao, opts => opts.MapFrom(src => src.Descricao))
                .ForMember(dest => dest.Local, opts => opts.MapFrom(src => src.Local))
                .ForMember(dest => dest.Data, opts => opts.MapFrom(src => src.Data))
                .ForMember(dest => dest.TipoEvento, opts => opts.MapFrom(src => src.TipoEvento))
                

                .ForAllOtherMembers(dest => dest.Ignore());
            #endregion

           
        }
    }
}
