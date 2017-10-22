onmessage = function(e) {
    var sharedArray = new Int32Array(e.data)
    sharedArray[1] = 123

    Atomics.wait(sharedArray, 0, 1)
    console.log("[Worker]", sharedArray[0])

    sharedArray[1] = 234
    Atomics.wait(sharedArray, 0, 2)
    console.log("[Worker]", sharedArray[0])

    sharedArray[1] = 345
    Atomics.wait(sharedArray, 0, 3)
    console.log("[Worker]", sharedArray[0])

    sharedArray[1] = 345
    Atomics.wait(sharedArray, 0, 4)
    console.log("[Worker]", sharedArray[0])

}