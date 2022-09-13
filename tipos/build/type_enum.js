"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "000000";
})(DesignColors || (DesignColors = {}));
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 2] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.SUPPORT);
