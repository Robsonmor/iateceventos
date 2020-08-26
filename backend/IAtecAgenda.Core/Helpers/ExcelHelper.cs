using ClosedXML.Excel;
using IAtecAgenda.Core.Extensions;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace IAtecAgenda.Core.Helpers
{
    public static class ExcelHelper
    {
        public static MemoryStream Convert<TEntity>(IEnumerable<TEntity> list,
                                    IDictionary<string, string> labelColumns)
        {
            if (list == null || !list.Any())
                return null;


            var columns = list.FirstOrDefault();
            var stream = new MemoryStream();
            using (var wbOutput = new XLWorkbook())
            {
                var wsOutput = CreateWorksheet(wbOutput, columns, labelColumns);
                int linha = 2;

                foreach (var item in list)
                {
                    InsertRow(wsOutput, item, linha);
                    linha++;
                }

                // Formata Conteudo
                wsOutput.Rows().AdjustToContents();
                wsOutput.Columns().AdjustToContents();

                // Retorna Excel
                wbOutput.SaveAs(stream);
            }

            return stream;
        }

        public static void SaveAs<TEntity>(IEnumerable<TEntity> list, IDictionary<string, string> labelColumns, string file)
        {
            var columns = list.FirstOrDefault();
            using (var wbOutput = new XLWorkbook())
            {

                var wsOutput = CreateWorksheet(wbOutput, columns, labelColumns);
                int linha = 2;
                foreach (var item in list)
                {
                    InsertRow(wsOutput, item, linha);
                    linha++;
                }

                // Formata Conteudo
                wsOutput.Rows().AdjustToContents();
                wsOutput.Columns().AdjustToContents();


                // Salva Excel
                wbOutput.SaveAs(file);
            }
        }
        public static void CreateEmptyWithHeaders(IDictionary<string, string> labelColumns, string file)
        {
            using (var wbOutput = new XLWorkbook())
            {
                var ws = wbOutput.Worksheets.Add("Empty");

                foreach (var (item, index) in labelColumns.WithIndex())
                    ws.Cell(1, (index + 1)).Value = item.Value;

                wbOutput.SaveAs(file);
            }
        }
        #region Private Methods

        private static IXLWorksheet CreateWorksheet(XLWorkbook wbOutput, object columns, IDictionary<string, string> labelColumns)
        {
            var columnsExcel = 1;
            var ws = wbOutput.AddWorksheet("Planilha");
            var properties = columns.GetType().GetProperties();

            foreach (var prop in properties)
            {
                labelColumns.TryGetValue(prop.Name, out string value);
                if (!string.IsNullOrEmpty(value))
                    ws.Cell(1, columnsExcel).Value = value ?? prop.Name;
                else
                    ws.Cell(1, columnsExcel).Value = prop.Name;
                columnsExcel++;
            }
            ws.Columns(1, columnsExcel).Style.Font.FontSize = 8;
            return ws;
        }

        private static void InsertRow(IXLWorksheet ws, object content, int row)
        {
            var columnsExcel = 1;
            var properties = content.GetType().GetProperties();
            foreach (var prop in properties)
            {
                var value = prop.GetValue(content, null);
                ws.Cell(row, columnsExcel).SetValue((value ?? string.Empty).ToString()).SetDataType(XLDataType.Text);               
                columnsExcel++;
            }
        }

        

        #endregion
    }
}
