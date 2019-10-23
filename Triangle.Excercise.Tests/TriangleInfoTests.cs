using System;
using Xunit;
using Triangles.Excercise;

namespace Triangle.Excercise.Tests
{
    public class TriangleInfoTests
    {
        [Theory]
        [InlineData("A", 1, 100, "0,0, 100,100, 0,100")]
        [InlineData("A", 2, 100, "0,0, 100,100, 100,0")]
        [InlineData("C", 11, 100, "500,200, 600,300, 500,300")]
        [InlineData("A", 1, 10, "0,0, 10,10, 0,10")]
        [InlineData("A", 2, 10, "0,0, 10,10, 10,0")]
        public void CheckTringleById(string row, int column, int sideLength, string expected)
        {
            TriangleInfo triangle = new TriangleInfo(row, column, sideLength);
            Assert.True(triangle.IsValid);
            Assert.Equal(triangle.SVG, expected);
        }

        [Theory]
        [InlineData("A", 13, 100)]
        [InlineData("G", 1, 100)]
        [InlineData("K", 1, 100)]
        public void CheckInvalidInputbyId(string row, int column, int sideLength)
        {
            TriangleInfo triangle = new TriangleInfo(row, column, sideLength);

            Assert.False(triangle.IsValid);
        }
    }
}
