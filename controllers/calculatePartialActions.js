function calculateActions() {
    console.log('Entrou na funcao');
    var iR = parseInt(document.getElementById("initiativeRoll").value);
    var wM = parseInt(document.getElementById("weaponModifier").value);
    var sM = parseInt(document.getElementById("spellModifier").value);
    var cM = parseInt(document.getElementById("combatantModifier").value);
    var wsM = parseInt(document.getElementById("wsModifier").value);
    var mM = parseInt(document.getElementById("magicModifier").value);
    var tM = parseInt(document.getElementById("talentModifier").value);
    var total = iR + wM + sM + cM + wsM + mM + tM;
    console.log(total);
    answer = "";
    if (total <= -10) {
        answer = "1 partial action/2 rounds";
    } else if (total <= -5 && total > -10) {
        answer = "1 partial action/round";
    } else if (total <= 0 && total > -5) {
        answer = "3 partial actions/2 rounds";
    } else if (total <= 5 && total > 0) {
        answer = "2 partial actions/round";
    } else if (total <= 10 && total > 5) {
        answer = "5 partial actions/2 rounds";
    } else if (total <= 15 && total > 10) {
        answer = "3 partial actions/round";
    } else if (total <= 20 && total > 15) {
        answer = "7 partial actions/2 rounds";
    } else {
        answer = "4 partial actions/round";
    }
    if (wsM > 0 && tM > 0) {
        answer = "Specialist modifier do not stack with talent modifier. Please recalculate actions."
    }
    console.log(answer);
    document.getElementById("actionsResult").value = answer;
}
