Write a function that receives two sequences: A and B of integers and returns one sequence C. Sequence C should contain all elements from sequence A (maintaining the order) except those, that are present in sequence B p times, where p is a prime number.

Example:
A=[2,3,9,2,5,1,3,7,10]
B=[2,1,3,4,3,10,6,6,1,7,10,10,10]
C=[2,9,2,5,7,10] 

---

I believe that the time complexity of this algorithm is O(M + N * sqrt(M))

The breakdown:

The complexity of the `isPrime` method is O(sqrt(N)), as specified in the source website (it loops sqrt(x) times as that's the loop limit)

The `task` method contains two loops.
The first one loops through arrayB M times while adding elements to the map or incrementing the counter, both of which have complexity of O(1). This makes the first loop of O(M).
The second one loops through arraY B N times, but with a nested loop through map elements to check if the counter is a prime number. For the big O we are concerned with the worst case scenario, which in this case is that all elements from arrayA are present in arrayB and thus the primality test needs to be performed for all of them. This means that the second loop has the complexity of O(N * sqrt(M)).