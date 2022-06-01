function submit() {
    let x = "foo";
    if (x == "foo") {
      let y = "boo";
    }
    console.log(x); // 'foo'
    console.log(y); // 'Reference error'
  }
  submit();