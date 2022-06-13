function sendMessage() {
  /*let ref1 = $("#id1");
  let ref2 = $("#output");
  ref2.html(ref1.val());*/

  $("#output").html($("#id1").val());
  $("#id1").val("");
}
