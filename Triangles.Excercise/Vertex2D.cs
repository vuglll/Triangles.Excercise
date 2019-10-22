using System;
namespace Triangles.Excercise
{
    public class Vertex2D
    {
        public int X { get; set; }
        public int Y { get; set; }

        public override string ToString()
        {
            return $"{X},{Y}";
        }

        public override bool Equals(object obj)
        {
            var target = (Vertex2D)obj;
            return X == target.X && Y == target.Y;
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }
    }
}
