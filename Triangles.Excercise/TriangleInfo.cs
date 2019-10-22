using System;
using System.Collections.Generic;
using System.Linq;

namespace Triangles.Excercise
{
    public class TriangleInfo
    {
        public string DisplayName { get { return RowIdentifier.ToUpper() + ColumnIdentifier; } }
        public List<Vertex2D> Vertices { get; set; }
        private string RowIdentifier { get; set; }
        private string ColumnIdentifier { get; set; }

        public TriangleInfo(string rowId, int columnId, int sideLenght = 100)
        {

            Vertices = new List<Vertex2D>();

            // calculate 0-base row number
            int row = rowId.ToUpper().ToCharArray().FirstOrDefault() - 'A';

            RowIdentifier = rowId;
            ColumnIdentifier = columnId.ToString();

            // calculate 0-base column number
            columnId--;

            int column = columnId / 2;
            int columnPos = columnId % 2;


            Vertex2D A = new Vertex2D() { Y = row * sideLenght, X = column * sideLenght };
            Vertex2D B = new Vertex2D() { Y = (row + 1) * sideLenght, X = (column + 1) * sideLenght };
            Vertex2D C = new Vertex2D() { Y = (columnPos == 0) ? ((row + 1) * sideLenght) : row * sideLenght, X = (columnPos == 0) ? (column * sideLenght) : (column + 1) * sideLenght };


            Vertices.Add(A);
            Vertices.Add(B);
            Vertices.Add(C);
        }

        public TriangleInfo(int v1x, int v1y, int v2x, int v2y, int v3x, int v3y, int sideLenght = 100)
        {
            Vertices = new List<Vertex2D>();
            Vertex2D A = new Vertex2D() { X = v1x, Y = v1y };
            Vertex2D B = new Vertex2D() { X = v2x, Y = v2y };
            Vertex2D C = new Vertex2D() { X = v3x, Y = v3y };

            Vertices.Add(A);
            Vertices.Add(B);
            Vertices.Add(C);

            var maxY = Vertices.Select(a => a.Y).Max();
            var row = maxY / sideLenght;

            RowIdentifier = "" + (char)(65 + row - 1);


            var maxX = Vertices.Select(a => a.X).Max();
            var column = maxX / sideLenght;

            var sorted = Vertices.Select(a => a.X).OrderBy(a => a).ToArray();
            if (sorted[0] == sorted[1])
            {
                ColumnIdentifier = ((column * 2) - 1).ToString();
            }
            else
            {
                ColumnIdentifier = (column * 2).ToString();
            }

        }

        public string SVG
        {
            get
            {
                return string.Join(", ", Vertices);
            }
        }
    }
}
