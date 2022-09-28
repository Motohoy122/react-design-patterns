import Box from '@mui/material/Box';

const WaveDivider = () => {
    const wave = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100px',
        background: 'url(\'/wave.png\')'
    }
    return (
        <>
            <Box sx={{
                ...wave,
                animation: 'animate 30s linear infinite',
                zIndex: 1000,
                opacity: 1,
                animationDelay: '0s',
                bottom: 0,
                "@keyframes animate": {
                "0%": {
                    backgroundPositionX: 0
                },
                "100%": {
                    backgroundPositionX: '4000px'
                }
                }
            }}>
            </Box>
            <Box sx={{
                ...wave,
                animation: 'animate2 20s linear infinite',
                zIndex: 999,
                opacity: 0.5,
                animationDelay: '-2s',
                bottom: '10px',
                "@keyframes animate2": {
                "0%": {
                    backgroundPositionX: 0
                },
                "100%": {
                    backgroundPositionX: '-4000px'
                }
                }
            }}>
            </Box>
            <Box sx={{
                ...wave,
                animation: 'animate 30s linear infinite',
                zIndex: 998,
                opacity: 0.2,
                animationDelay: '-5s',
                bottom: 15,
                "@keyframes animate": {
                "0%": {
                    backgroundPositionX: 0
                },
                "100%": {
                    backgroundPositionX: '4000px'
                }
                }
            }}>
            </Box>
            <Box sx={{
                ...wave,
                animation: 'animate2 20s linear infinite',
                zIndex: 997,
                opacity: 0.7,
                animationDelay: '-5s',
                bottom: '20px',
                "@keyframes animate2": {
                "0%": {
                    backgroundPositionX: 0
                },
                "100%": {
                    backgroundPositionX: '-4000px'
                }
                }
            }}>
            </Box>
        </>
    )
}

export default WaveDivider