let http_status = 200
let get_user = () => {
    ///http_status=400
    return  {msg: "user get",  vars};
}

let post_user = () => {
    return  {msg: "user post"};
}

let html_user = () => {
    content_type = "text/html; charset=UTF-8"
    let data = 3456
    return  `<h5>User HTML ${data}</h5>`;
}

