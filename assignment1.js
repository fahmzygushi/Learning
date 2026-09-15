let userName = "Fahmeedah"
let role = "Manager"
let door = "Manager office"
if (door === "Front door"){
    console.log (userName + "has access to the front door.")
}else if (door === "Staff door" && (role === "Staff" || role ==="Manager" || role === "General Manager" )){
    console.log (userName + " has access to Staff door.")
}else if (door === "Manager office" &&(role === "Manager" || role === "General Manager")){
    console.log(userName + " has access to the Manager office." )
}else if (door === "General Manager Office" && role === "General Manager"){
    console.log(userName + " has access to the General Manager Office." + ".")
}else {
   console.log(userName + " access denied to the" + door)      
}