"use client"
import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
import { customizedNivoTheme } from 'app/Bar/theme'
import { data } from './data';

type props = {
    isDashboard: boolean
}
function Line({ isDashboard }: props) {
    const theme = useTheme();
    return (
        <Box height={isDashboard ? "280px" : "75dvh"}>
            <ResponsiveLine
                data={data}
                theme={customizedNivoTheme(theme)}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                curve="catmullRom"
                yFormat=" >-.2f"
                layers={['grid', 'markers', 'axes', 'areas', 'crosshair', 'lines', 'points', 'slices', 'mesh', 'legends']}
                axisTop={null}
                axisRight={null}
                enablePointLabel={false}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? null : 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle',
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? null : 'count',
                    legendOffset: -40,
                    legendPosition: 'middle',
                }}
                colors={{ scheme: 'nivo' }}
                enableGridX={true}
                enableGridY={true}
                enablePoints={true}
                enableArea={false}
                pointLabel="value"
                areaOpacity={0.1}
                areaBaselineValue={0}
                areaBlendMode="normal"
                lineWidth={2}
                isInteractive={true}
                debugMesh={false}
                tooltip={() => ''}
                enableSlices="x"
                debugSlices={false}
                sliceTooltip={() => ''}
                enableCrosshair={true}
                crosshairType="cross"
                role="application"
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: { id: 'dots' },
                        id: 'dots'
                    },
                    {
                        match: { id: 'lines' },
                        id: 'lines'
                    }
                ]}
            />
        </Box>
    )
}

export default Line