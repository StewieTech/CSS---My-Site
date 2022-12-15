// public class recursion;
    // public static void main(String[] args) {
    //     if (base_case1) {
    //         //termination logic for base case 1
    //     else if (base_case2) {

    //     }
    //     else {
    //         // logic for setting up recursive calls
    //         return recursive
    //     }
    //     }
    
// }


public class recursion {
    public static void main(String[] args) {
        public int gcd(int x, int y) {
            if (y == 0) { //  Base case
                return x;
            } else { // Recursive call
                int remainder = x % y;
                return gcd(y, remainder);
            }
        }
    }
}
