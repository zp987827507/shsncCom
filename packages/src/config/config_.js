/** @format */
export default {
    //echarts事件
    EVENTS: ['click', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup'],
    //字体大小
    FONT_S: 13,
    FONT_M: 16,
    Font_L: 18,
    //字体颜色
    FONT_COLOR: '#666',
    //轴线颜色
    BORDER_COLOR: '#D8D8D8',
    //常规颜色
    COLOR: [
        '#54A0FF',
        '#FBC958',
        '#44CC75',
        '#FB7293',
        '#9D96F5',
        '#FF9F7F',
        '#0BD3FF',
        '#36D1A1',
        '#F0BBFF',
        '#8D80C7',
        '#E690D1',
        '#3E98F1',
        '#2AB0B1',
        '#91DD40',
        '#E062AE',
        '#B23F58',
    ],
    pieColor: ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE', '#3BA272'],
    alarmColor: ['#F56A6A', '#FF8E7A', '#FFBE72', '#FFDD76', '#6BE3DF', '#7ED2FF'],
    //是否显示工具栏
    SHOW_TOOLBOX: false,
    //保存为图片时的填充背景色
    BG_COLOR: 'rgba(0,0,0,0)',
    IMG_NONE:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTc1QUMxQUQ3QjA3MTFFQUFCQ0JGMUU4QTBFNkExODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTc1QUMxQUU3QjA3MTFFQUFCQ0JGMUU4QTBFNkExODEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NzVBQzFBQjdCMDcxMUVBQUJDQkYxRThBMEU2QTE4MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NzVBQzFBQzdCMDcxMUVBQUJDQkYxRThBMEU2QTE4MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pimq+WMAAATJSURBVHja7N1JbuMwEEBRl+Gz5lC5bPWqge4gtkSJIiny/V0QT6I+a6CmyMzHWb6/vx+V+fdHxQND8vX1dfoznoYRPSEguvIa6LekdEzAFchFtjMISLxRtjcIWDZjaw7eauK9G4MhJdSEyAAiYONBD8KJgHvScVwgy0pddNxByufiO8Q2E1DXuzKaEBAQ61K7C041GHoJmDv+Hw2Fn7UmnGoiPxuLkJ3km625SgL2nak63EnG4HmxfFcsJpNPDXgq8tWuBVdqbrJBXT1NCr5CmFy8s55ue5+NZilI2CwFt5LOumLfZqfK+D8by0CaeTrtHEnAPXKRD5en4PhldhBvvug3fA1Iunmbn6piOhsGe4PIJYcACYipasDla5rJyo943GQZhnx9vqvXhKo2yVa8NQcGiupPAwg1IAmXRRcMAoKAAAGhCZmZUdbnNEMioIlAQICAUrAa0I4XAQECgoAAAaEJmZDaa28aGhEQBAQIKGWqAUkIERAEBAgIAgIEBAEBAmJk3Bvmf/YeM7amSMAu4v32ejJKwafEy8byQgTcFCcK35OiIQFryFfyqIl887kklIKL5TvyVE+iEbCafEcJNSEBH5UFIiEBmzcdI4hMQNHvNsIT8ObR74qnAImCBBSpCKghAQFBQICAICBAQB01AefufkHAIsmShASUfrG0gHnxZ4mqBNwUQtQi4O0joehHwNMdbx4ULyefXARsLGFWEi8HlW+4yLzqVXHx2L7EsoYA0Um0mhPj0m1wRnSbqHrnZicJeK2EUen9sWNH6rql4M0IlgWvLUntIGCT1LwlYe3a8NZLPtYBJ6yrCAgSLiBgkpCAOF+X5crS3l3AXFRCAg60U1eScLoTaWstw9S+rcWqaWm5SKgGXKPOJCDId2UKPnMIKmYe4INpdpkTWl9mZZfoZRFaCh42hQYB0UvC5bKIs2E0EyIgCAgQEAQECAgCAgQEAQECgoAAAUFAgIAgIEBAEBAgIAgIEBAEBAiI+9Drqrh/L8ye8cqw3LlteWIMcobxe9145z4GkXjvZPopTDYcn73ErALmgf+dvYVF7R0cA/0WNeAgxKN/Ctp6xsjs5cYtIuC7tBMHd3SN148kRl4QeaPCd09dA8Yk0SE3/v67nXGRpLcew9dAO2q6+x//2KbWXWsSsO2Axk23JVauF90d67r6tvbkeHcjd+uAJ4rikhkfA0eJvU9Qj0HGO1YU8EjxfkS0vECgTzs3PzRX8aYO/Pndyy7PvAaKEncsovc0Tp+EbNH0lIxtzCxgaYS529GDPfd9zp3buMxjvkatAc/UeVG4086sR5Y+Oiwe20dLppdOBGyTAmvfCT8Lx0wTUjiQ2Wi21+6iS393VJ5olmHQrJasFTGHOaXtdcPBHukUrU8NRu2IGxdvRxdWPiW/5owf7STQ26Tl3hEwb/RdJZEsC7rrbLB9McD4Lx0Be5xpkwdfs9TZ07PXgK2K7SP12adDeMscnps5BdeULytsx6fDcfEhjdcoD5KA/aXeWhjOnTtrb7R7d5rW1kkX+UbCKVPzCjVg6wuX4hep4s0kKHlka+z8bim4cw149BqMOPj7s1COPe+JR1kk3nr9sF1wZLpkFQQEAQECgoAAAUFAgIAgIHAdfwQYABFVIon6oEPCAAAAAElFTkSuQmCC',
    IMG_NONE_W: 150,
    IMG_NONE_H: 150,
}
