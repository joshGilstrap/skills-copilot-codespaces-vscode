function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = member.getElementsByClassName("skills");
    var memberSkillsLength = memberSkills.length;
    var memberSkillsHeight = memberSkills[0].clientHeight;
    var memberSkillsHeight = memberSkillsHeight + 20;
    for (var i = 0; i < memberSkillsLength; i++) {
        memberSkills[i].style.height = memberSkillsHeight + "px";
    }
}