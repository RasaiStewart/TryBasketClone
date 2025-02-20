// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons within product cards
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll<HTMLButtonElement>('.product-card button');

    // Add click event listeners to each button
    buttons.forEach((button: HTMLButtonElement) => {
        button.addEventListener('click', () => {
            alert('Added to Wishlist!');
        });
    });
});

// Example: Display a popup with team member details
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const name = (member.querySelector('h3') as HTMLHeadingElement).textContent;
            const role = (member.querySelector('p') as HTMLParagraphElement).textContent;
            alert(`Name: ${name}\nRole: ${role}`);
        });
    });
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    alert('Signup successful!');
    // Submit the form or perform further actions
});
