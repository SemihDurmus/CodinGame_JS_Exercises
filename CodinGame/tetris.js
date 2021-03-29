// Christmas is coming and in your packet delivery company with drones has detected a failure in the algorithm that is responsible for stacking them.

// Each drone in turn carries a single package, and drops it when its lower left corner matches the given coordinates (x, y).

// Your mission is to calculate the height of the pile of packages once the drones have left them in the delivery area.

// Let's see an example with a top view of the delivery area after drop a package with:
// x, y = 0, 0
// long x = 4
// width y = 3
// height z = 2

// the height on each point of the delivery area will be:

// |0 0 0 0 0
// |2 2 2 2 0
// |2 2 2 2 0
// |2 2 2 2 0
// -----------------

// After dropping a second package with:
// x, y = 1, 1
// long x = 2
// width y = 2
// height z = 1

// the height on each point of the delivery area will be:

// |0 0 0 0 0
// |2 3 3 2 0
// |2 3 3 2 0
// |2 2 2 2 0
// -----------------

// So, the height of the pile is 3.

// Note it follows Tetris rules, packages allowed to fall in the z direction until they land on either the ground or another package. They magically balance even if they only overlap a tiny bit of the package below.
// Input
// Line 1: An integer N, the number of drones/packages
// Next N Lines: Five space-separated integers corresponding to x y v w h

// x y are the coordinates of the front left corner of the packet.
// v stands for the length in the +x direction
// w stands for the width in the +y direction
// h stands for the height
// Output
// An integer with the height of the pile of packages.
// Constraints
// The packages have a cuboid (rectangular box) shape
// 0 < N <= 10
// 0 <= x, y, v, w, h <= 20
// 0 <= x+v, y+w <= 100

// Input
// 2
// 0 0 4 3 2
// 1 1 2 2 1

// Output
// 3
