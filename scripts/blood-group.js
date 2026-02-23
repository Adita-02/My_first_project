
        function showSteps() {
            document.getElementById('step1').style.display = 'none';
            document.getElementById('stepsContent').style.display = 'block';
        }
        
        function showSuccessMessage() {
            document.getElementById('stepsContent').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        }
        
        function showFunnyMessage() {
            document.getElementById('step1').style.display = 'none';
            document.getElementById('funnyMessage').style.display = 'block';
        }
        
        function resetProcess() {
            document.getElementById('step1').style.display = 'block';
            document.getElementById('stepsContent').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('funnyMessage').style.display = 'none';
        }
  