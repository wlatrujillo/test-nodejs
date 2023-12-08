export function findNaughtyStep(original, modified) {

      if (original.localeCompare(modified) === 0) {
            return '';
      }

      let originalLength = original.length;
      let modifiedLength = modified.length;

      if (originalLength > modifiedLength) {

            for (let i = 0; i < originalLength; i++) {
                  if (original[i] !== modified[i]) {
                        return original[i];
                  }
            }
      } else {

            for (let i = 0; i < modified.length; i++) {
                  if (original[i] !== modified[i]) {
                        return modified[i];
                  }
            }
      }

}