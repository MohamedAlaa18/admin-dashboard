"use client"
import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie'
import { customizedNivoTheme } from 'app/Bar/theme';
import { data } from './data';
import Title from 'components/Title';

interface props {
    isDashboard: boolean
}
function Pie({ isDashboard }: props) {
    const theme = useTheme();

    return (
        <Box height={isDashboard ? "200px" : "75dvh"}>
            {isDashboard ? null : <Title title={"Pie chart"} subtitle={"Simple Pie Chart"} isDashboard={false} />}

            <ResponsivePie
                data={data}
                theme={customizedNivoTheme(theme)}
                margin={isDashboard ? { top: 10, right: 0, bottom: 10, left: 0 } : { top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={isDashboard ? 0.8 : 0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                enableArcLabels={isDashboard ? false : true}
                enableArcLinkLabels={isDashboard ? false : true}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={theme.palette.text.primary}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: theme.palette.text.primary,
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: theme.palette.text.primary,
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={
                    isDashboard ? [] :
                        [{
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: theme.palette.text.secondary,
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: theme.palette.text.primary
                                    }
                                }
                            ]
                        }
                        ]}
            />
        </Box>
    )
}

export default Pie