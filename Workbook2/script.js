// Don't Repeat Yourself
// DRY

// Write Everything Twice
// WET

let dayNum = 10;
let dayCategory;
switch (dayNum) {
    case 0:
    case 6:
        dayCategory = "Weekend";
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        dayCategory = "Weekday";
        break;
    default:
        dayCategory = "<unknown>";
}
