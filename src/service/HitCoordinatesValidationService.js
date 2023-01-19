const HitCoordinatesValidationService = {

    validateCheckBox: (value, coordinateName) => {
        if (value === null) {
            return coordinateName + " should be picked!"
        }
        return "";
    },
    validateYCoordinate: (value) => {

        if (value === null || value === "") {
            return "Y coordinate field should not be empty!";
        }

        const num = Number(value);

        if (num <= -3 || num >= 3) {
            return "Y coordinate should be a number in range (-3...3)"
        }

        return "";
    }

}

export default HitCoordinatesValidationService;