let http_status = 200
let get_user = () => {
    http_status=400
    return  {msg: "user get",  vars, paso:"aaa"};
}

let post_user = () => {
    return  {msg: "user post"};
}

let html_user = () => {
    content_type = "text/html; charset=UTF-8"
    return  "<h5>User HTML</h5>";
}

