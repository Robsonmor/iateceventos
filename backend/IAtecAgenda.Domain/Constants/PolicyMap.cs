using System;
using System.Collections.Generic;
using System.Text;

namespace IAtecAgenda.Domain.Constants
{
    public class PolicyMap
    {

        #region Definição das políticas de acordo com as Roles
        #region Minha Conta
        /// <summary>
        /// minha-conta
        /// </summary>
        public static string[] sMC { get { return svMC.Split(','); } }
        /// <summary>
        /// minha-conta
        /// </summary>
        public const string svMC = "Administrador,Analista_II";
        /// <summary>
        /// minha-conta / central-downloads
        /// </summary>
        public static string[] sMCCD { get { return svMC.Split(','); } }
        /// <summary>
        /// minha-conta / central-downloads
        /// </summary>
        public const string svMCCD = "Administrador,Analista_II";
        #endregion
        #region Operação
        /// <summary>
        /// operacao
        /// </summary>
        public static string[] sO { get { return svO.Split(','); } }
        /// <summary>
        /// operacao
        /// </summary>
        public const string svO = "Administrador,Analista_II,Analise,TriagemManual,Suporte,Cliente";
        /// <summary>
        /// operacao / analise
        /// </summary>
        public static string[] sOA { get { return svOA.Split(','); } }
        /// <summary>
        /// operacao / analise
        /// </summary>
        public const string svOA = "Administrador,Analista_II,Analise,TriagemManual,Suporte";
        /// <summary>
        /// operacao / abrir-chamado
        /// </summary>
        public static string[] sOAC { get { return svOAC.Split(','); } }
        /// <summary>
        /// operacao / abrir-chamado
        /// </summary>
        public const string svOAC = "Administrador,Analista_II,Analise,TriagemManual" ;
        /// <summary>
        /// operacao / pesquisa
        /// </summary>
        public static string[] sOP { get { return svOP.Split(','); } }
        /// <summary>
        /// operacao / pesquisa
        /// </summary>
        public const string svOP = "Administrador,Analista_II,Analise,TriagemManual";
        /// <summary>
        /// operacao / detalhes-analise
        /// </summary>
        public static string[] sODA { get { return svODA.Split(','); } }
        /// <summary>
        /// operacao / detalhes-analise
        /// </summary>
        public const string svODA = "Administrador,Analista_II,Analise,TriagemManual";
        /// <summary>
        /// operacao / visao-gerencial
        /// </summary>
        public static string[] sOVG { get { return svOVG.Split(','); } }
        /// <summary>
        /// operacao / visao-gerencial
        /// </summary>
        public const string svOVG = "Administrador,Analista_II,Analise,Suporte,Cliente";
        /// <summary>
        /// operacao / gerenciador-relatorio
        /// </summary>
        public static string[] sOGR { get { return svOGR.Split(','); } }
        /// <summary>
        /// operacao / gerenciador-relatorio
        /// </summary>
        public const string svOGR = "Administrador,Analista_II,Analise";
        /// <summary>
        /// operacao / relatorio-geral-analitico
        /// </summary>
        public static string[] sORGA { get { return svORGA.Split(','); } }
        /// <summary>
        /// operacao / relatorio-geral-analitico
        /// </summary>
        public const string svORGA = "Administrador,Analista_II";
        #endregion
        #region Configuração
        /// <summary>
        /// configuracao
        /// </summary>
        public static string[] sC { get { return svC.Split(','); } }
        /// <summary>
        /// configuracao
        /// </summary>
        public const string svC = "Administrador,Analista_II";
        /// <summary>
        /// configuracao / operacao-grupos
        /// </summary>
        public static string[] sCOG { get { return svCOG.Split(','); } }
        /// <summary>
        /// configuracao / operacao-grupos
        /// </summary>
        public const string svCOG = "Administrador";
        /// <summary>
        /// configuracao / operacoes
        /// </summary>
        public static string[] sCO { get { return svCO.Split(','); } }
        /// <summary>
        /// configuracao / operacoes
        /// </summary>
        public const string svCO = "Administrador,Analista_II";
        /// <summary>
        /// configuracao / atividades
        /// </summary>
        public static string[] sCA { get { return svCA.Split(','); } }
        /// <summary>
        /// configuracao / atividades
        /// </summary>
        public const string svCA = "Administrador,Analista_II";
        /// <summary>
        /// configuracao / lista-templates
        /// </summary>
        public static string[] sCLT { get { return svCLT.Split(','); } }
        /// <summary>
        /// configuracao / lista-templates
        /// </summary>
        public const string svCLT = "Administrador";
        /// <summary>
        /// configuracao / motivos-rejeicao
        /// </summary>
        public static string[] sCMR { get { return svCMR.Split(','); } }
        /// <summary>
        /// configuracao / motivos-rejeicao
        /// </summary>
        public const string svCMR = "Administrador,Analista_II";
        /// <summary>
        /// configuracao / add-motivos-rejeicao
        /// </summary>
        public static string[] sCAMR { get { return svCAMR.Split(','); } }
        /// <summary>
        /// configuracao / add-motivos-rejeicao
        /// </summary>
        public const string svCAMR = "Administrador,Analista_II";
        /// <summary>
        /// configuracao / motivos-contingencia
        /// </summary>
        public static string[] sCMC { get { return svCMC.Split(','); } }
        /// <summary>
        /// configuracao / motivos-contingencia
        /// </summary>
        public const string svCMC = "Administrador,Analista_II";
        /// <summary>
        /// configuracao / add-motivos-contingencia
        /// </summary>
        public static string[] sCAMC { get { return svCAMC.Split(','); } }
        /// <summary>
        /// configuracao / add-motivos-contingencia
        /// </summary>
        public const string svCAMC = "Administrador,Analista_II";
        /// <summary>
        /// configuracao / template
        /// </summary>
        public static string[] sCT { get { return svCT.Split(','); } }
        /// <summary>
        /// configuracao / template
        /// </summary>
        public const string svCT = "Administrador";

        #endregion
        #region Administração
        /// <summary>
        /// administracao
        /// </summary>
        public static string[] sA { get { return svA.Split(','); } }
        /// <summary>
        /// administracao
        /// </summary>
        public const string svA = "Administrador,Analista_II";
        /// <summary>
        /// administracao / usuarios
        /// </summary>
        public static string[] sAU { get { return svAU.Split(','); } }
        /// <summary>
        /// administracao / usuarios
        /// </summary>
        public const string svAU = "Administrador,Analista_II";
        /// <summary>
        /// administracao / alerta-atividade
        /// </summary>
        public static string[] sAAA { get { return svAAA.Split(','); } }
        /// <summary>
        /// administracao / alerta-atividade
        /// </summary>
        public const string svAAA = "Administrador,Analista_II";
        /// <summary>
        /// administracao / priorizar-sla
        /// </summary>
        public static string[] sAPS { get { return svAPS.Split(','); } }
        /// <summary>
        /// administracao / priorizar-sla
        /// </summary>
        public const string svAPS = "Administrador,Analista_II";
        #endregion

        #region importacao
        /// <summary>
        /// importacao
        /// </summary>
        public static string[] sI { get { return svI.Split(','); } }
        /// <summary>
        /// importacao
        /// </summary>
        public const string svI = "Administrador,Analista_II";
        /// <summary>
        /// importacao / central-upload
        /// </summary>
        public static string[] sICU { get { return svICU.Split(','); } }
        /// <summary>
        /// importacao / central-upload
        /// </summary>
        public const string svICU = "Administrador,Analista_II";
        #endregion
        #endregion
    }
}
