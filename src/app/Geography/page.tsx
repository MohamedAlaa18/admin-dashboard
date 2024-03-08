"use client"
import { Box, useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import { data } from './data'
import { customizedNivoTheme } from 'app/Bar/theme';
import { geo } from './counties';

function Geography() {
    const theme = useTheme();
    return (
        <Box height={"75dvh"} sx={{ border: `1px solid ${theme.palette.text.primary}`, borderRadius: 1 }}>
            <ResponsiveChoropleth
                data={data}
                theme={customizedNivoTheme(theme)}
                features={geo.features}
                projectionScale={150}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="spectral"
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                enableGraticule={false}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
                legends={[
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -30,
                        itemsSpacing: 0,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: theme.palette.text.secondary,
                        itemOpacity: 0.85,
                        symbolSize: 18,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: theme.palette.text.primary,
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Box>
    )
}

export default Geography