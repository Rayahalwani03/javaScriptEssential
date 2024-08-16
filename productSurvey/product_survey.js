document.getElementById('submitBtn').addEventListener('click', submitFeedback);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});

function submitFeedback() {
    // Collect values from input fields
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Display feedback in the specified elements
    document.getElementById('userName').textContent = username;
    document.getElementById('userAge').textContent = age;
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userJob').textContent = job;
    document.getElementById('userDesignation').textContent = designation;
    document.getElementById('userProductChoice').textContent = productType;
    document.getElementById('userFeedback').textContent = feedback;

    // Show the userInfo div
    document.getElementById('userInfo').style.display = 'block';

    // Alert to thank the user
    alert('Thank you for your valuable feedback!');
}
