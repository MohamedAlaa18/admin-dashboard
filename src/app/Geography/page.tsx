"use client"
import { Box, useTheme } from '@mui/material';
import { ResponsiveChoropleth, ChoroplethProps } from '@nivo/geo';
import { data } from './data';
import { customizedNivoTheme } from 'app/Bar/theme';
import { geo } from './counties';

interface ExtendedChoroplethProps extends ChoroplethProps {
    layers: string[];
}
interface props {
    isDashboard: boolean
}
function Geography({ isDashboard }: props) {
    const theme = useTheme();

    const choroplethProps: ExtendedChoroplethProps = {
        data: data,
        theme: customizedNivoTheme(theme),
        features: geo.features,
        projectionScale: isDashboard ? 70 : 150,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        colors: 'spectral',
        domain: [0, 1000000],
        unknownColor: "#666666",
        label: "properties.name",
        match: "id",
        layers: [isDashboard ? 'graticule':'legends', 'features' ],
        valueFormat: ".2s",
        projectionTranslation: [0.5, 0.5],
        projectionRotation: [0, 0, 0],
        enableGraticule: false,
        graticuleLineColor: "#dddddd",
        borderWidth: 0.5,
        graticuleLineWidth: 0.5,
        projectionType: 'mercator',
        value: 'value',
        role: "application",
        borderColor: "#fff",
        isInteractive: true,
        onMouseEnter: () => { },
        onMouseMove: () => { },
        onClick: () => { },
        onMouseLeave: () => { },
        fillColor: theme.palette.primary.main,
        legends: [
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
        ]
    };

    return (
        <Box height={isDashboard ? "350px" : "75dvh"} sx={{ border: isDashboard ? undefined : `1px solid ${theme.palette.text.primary}`, borderRadius: 1 }}>
            <ResponsiveChoropleth {...(choroplethProps as ChoroplethProps)} />
        </Box>
    );
}

export default Geography;
