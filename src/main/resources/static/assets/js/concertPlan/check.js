function showform_check(){
    var classification = document.getElementById("classification");
    var artistName = document.getElementById("artistName");
    var releaseDate = document.getElementById("releaseDate");
    var showtime = document.getElementById("showtime");
    var address = document.getElementById("address");

  if (classification.value == "") { //해당 입력값이 없을 경우 같은말: if(!classification.value)
    alert("선택바랍니다.");
    classification.focus(); //focus(): 커서가 깜빡이는 현상, blur(): 커서가 사라지는 현상
    return false; //return: 반환하다 return false:  아무것도 반환하지 말아라 아래 코드부터 아무것도 진행하지 말것
  };

  if (artistName.value == "") {
    alert("아티스트명을 작성하세요.");
    artistName.focus();
    return false;
  };

  if (releaseDate.value == "") {
    alert("공연날짜를 작성하세요.");
    releaseDate.focus();
    return false;
  };

  if (showtime.value == "") {
    alert("공연시간을 작성하세요.");
    showtime.focus();
    return false;
  };

  if (address.value == "") {
    alert("공연장소를 작성하세요.");
    address.focus();
    return false;
  };
}