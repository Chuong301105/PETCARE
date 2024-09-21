document.addEventListener('DOMContentLoaded', function () {
    const petSelect = document.getElementById('pet');
    const otherPetTypeDiv = document.getElementById('otherPetType');
    const homeServiceSelect = document.getElementById('homeService');
    const pickUpServiceSelect = document.getElementById('pickUpService');
    const addressFieldDiv = document.getElementById('addressField');

    // Show/Hide "other pet type" field
    petSelect.addEventListener('change', function () {
        if (petSelect.value === 'others') {
            otherPetTypeDiv.style.display = 'block';
        } else {
            otherPetTypeDiv.style.display = 'none';
        }
    });

    // Show/Hide "address" field
    function toggleAddressField() {
        if (homeServiceSelect.value === 'yes' || pickUpServiceSelect.value === 'yes') {
            addressFieldDiv.style.display = 'block';
        } else {
            addressFieldDiv.style.display = 'none';
        }
    }

    homeServiceSelect.addEventListener('change', toggleAddressField);
    pickUpServiceSelect.addEventListener('change', toggleAddressField);
});
