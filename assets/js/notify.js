class Notify {
  static success(message, id, redirect_to_page) {
    document.getElementById(id).style.display = "block";
    let str = "";
    str = `${message}<br><br>
        <button type="button" class="redirect_button" onclick="window.location.href='${redirect_to_page}'">
          OK
        </button>`;
    console.log(str);
    document.getElementById(id).innerHTML = str;
  }
}
