import { Theme } from "@mui/material";

export const customizedNivoTheme = (muiTheme: Theme) => ({
    text: {
        fontSize: 11,
        fill: muiTheme.palette.text.primary,
        outlineWidth: 0,
        outlineColor: "transparent"
    },
    axis: {
        domain: {
            line: {
                stroke: muiTheme.palette.divider,
                strokeWidth: 1
            }
        },
        legend: {
            text: {
                fontSize: 12,
                fill: muiTheme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent"
            }
        },
        ticks: {
            line: {
                stroke: muiTheme.palette.divider,
                strokeWidth: 1
            },
            text: {
                fontSize: 11,
                fill: muiTheme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent"
            }
        }
    },
    grid: {
        line: {
            stroke: muiTheme.palette.divider,
            strokeWidth: 1
        }
    },
    legends: {
        title: {
            text: {
                fontSize: 11,
                fill: muiTheme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent"
            }
        },
        text: {
            fontSize: 11,
            fill: muiTheme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent"
        },
        ticks: {
            line: {},
            text: {
                fontSize: 10,
                fill: muiTheme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent"
            }
        }
    },
    annotations: {
        text: {
            fontSize: 13,
            fill: muiTheme.palette.text.primary,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1
        },
        link: {
            stroke: "#000000",
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1
        },
        outline: {
            stroke: "#000000",
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1
        },
        symbol: {
            fill: "#000000",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1
        }
    },
    tooltip: {
        container: {
            background: muiTheme.palette.background.paper,
            color: muiTheme.palette.text.primary,
            fontSize: 12
        }
    }
});