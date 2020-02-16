function calculateActions() {
    console.log('Entrou na funcao');
    var iR = parseInt(document.getElementById("initiativeRoll").value);
    var wM = parseInt(document.getElementById("weaponModifier").value);
    var sM = parseInt(document.getElementById("spellModifier").value);
    var aM = parseInt(document.getElementById("agilityModifier").value);
    var cM = parseInt(document.getElementById("combatantModifier").value);
    var wsM = parseInt(document.getElementById("wsModifier").value);
    var mM = parseInt(document.getElementById("magicModifier").value);
    var tM = parseInt(document.getElementById("talentModifier").value);
    var total = iR + wM + sM + aM + cM + wsM + mM + tM;
    console.log(total);
    answer = "";
    if (total <= -6 && mM < 0) {
        answer = "1 partial action/2 rounds";
    } else if (total <= -1 && total > -6 && mM < 0) {
        answer = "1 partial action/round";
    } else if (total <= 4 && total > -1) {
        answer = "3 partial actions/2 rounds";
    } else if (total <= 9 && total > 4) {
        answer = "2 partial actions/round";
    } else if (total <= 14 && total > 9) {
        answer = "5 partial actions/2 rounds";
    } else if (total <= 19 && total > 14) {
        answer = "3 partial actions/round";
    } else if (total <= 24 && total > 19) {
        answer = "7 partial actions/2 rounds";
    } else if (total > 24 && mM > 0) {
        answer = "4 partial actions/round";
    } else {
        answer = "Please fill all fields with numerci values.";
    }
    if (wsM > 0 && tM > 0) {
        answer = "Specialist modifier do not stack with talent modifier. Please recalculate actions."
    }
    console.log(answer);
    document.getElementById("actionsResult").value = answer;
}
