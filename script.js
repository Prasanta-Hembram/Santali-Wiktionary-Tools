function basicSearch() {
    var basicSubmit=document.basicForm;
    var basicWord = encodeURIComponent(basicSubmit.searchterms.value);
    window.open("https://incubator.wikimedia.org/wiki/Wt/sat/" + basicWord );
    return false;
  }