'use strict'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multi-function Button</title>
</head>
<body>

<!-- Your button -->
<button id="multiFunctionButton">Click me!</button>

<script>
    // Your functions
    function function1() {
        alert('Function 1 executed!');
        // Add your code for function 1 here
    }

    function function2() {
        alert('Function 2 executed!');
        // Add your code for function 2 here
    }

    function function3() {
        alert('Function 3 executed!');
        // Add your code for function 3 here
    }

    // Button click event handler
    document.getElementById('multiFunctionButton').addEventListener('click', function () {
        // Call your functions here
        function1();
        function2();
        function3();
        // Add more functions if needed
    });
</script>

</body>
</html>
