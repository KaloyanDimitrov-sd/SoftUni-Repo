function extractFile(input) {
    let array = input.split("\\");
    let file = array.pop();
    let i = file.lastIndexOf(".");
    let name = file.substring(0, i);
    let extension = file.substring(i+1);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx');