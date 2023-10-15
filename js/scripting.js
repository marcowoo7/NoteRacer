const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field");

function iterateSentence(index) {
    sentences[index].split("").forEach(span => {
        let spanTag = '<span>${span}</span>';
        typingText.innerHTML += spanTag;
    })
}