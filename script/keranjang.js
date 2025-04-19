document.addEventListener('DOMContentLoaded', function() {
    // Quantity controls
    const decrementButtons = document.querySelectorAll('button:has(.ri-subtract-line)');
    const incrementButtons = document.querySelectorAll('button:has(.ri-add-line)');
    const quantityInputs = document.querySelectorAll('input[type="number"]');
    
    decrementButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const input = quantityInputs[index];
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
                updateSubtotal(index);
            }
        });
    });
    
    incrementButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const input = quantityInputs[index];
            input.value = parseInt(input.value) + 1;
            updateSubtotal(index);
        });
    });
    
    quantityInputs.forEach((input, index) => {
        input.addEventListener('change', function() {
            if (parseInt(this.value) < 1) {
                this.value = 1;
            }
            updateSubtotal(index);
        });
    });
    
    function updateSubtotal(index) {
        // This is a simplified version that would need to be expanded in a real application
        console.log(`Updated quantity for item ${index + 1}`);
    }
    
    // Delete confirmation modal
    const deleteButtons = document.querySelectorAll('button:has(.ri-delete-bin-6-line)');
    const confirmationModal = document.getElementById('confirmationModal');
    const cancelDeleteBtn = document.getElementById('cancelDelete');
    const confirmDeleteBtn = document.getElementById('confirmDelete');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            confirmationModal.classList.remove('hidden');
        });
    });
    
    cancelDeleteBtn.addEventListener('click', function() {
        confirmationModal.classList.add('hidden');
    });
    
    confirmDeleteBtn.addEventListener('click', function() {
        confirmationModal.classList.add('hidden');
        // Logic to actually delete the item would go here
    });
});