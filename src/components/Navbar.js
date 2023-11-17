import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link, useLocation } from 'react-router-dom'


const drawerWidth = 240
const navItems = ['Home', 'About', 'Contact']

function DrawerAppBar(props) {
  const { window, children } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const location = useLocation()

  

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{
              Height: 70,
              width: 55,
              
            }}
            src=' https://i.imgur.com/SE8uswq.png'
            alt='logox'
          />
          <text>SINDHULI BAZAR</text>
        </div>
      </Typography>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              textAlign: 'center',
              backgroundColor:
                location.pathname === `/${item.toLowerCase()}`
                  ? '#f0f0f0'
                  : 'inherit',
            }}
          >
            <ListItemButton>
              {item === 'About' ? (
                <Link
                  to='/about'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <ListItemText primary={item} />
                </Link>
              ) : item === 'Contact' ? (
                <Link
                  to='/contact'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <ListItemText primary={item} />
                </Link>
              ) : (
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                  <ListItemText primary={item} />
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

    
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
             <Link
             style={{textDecoration:"none"}}
                      to='/'
                      > 
            <div
              style={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                marginLeft:70
              }}
            >
                
              <img
              
                style={{
                  Height: 80,
                  width: 60,
                  padding:5
                }}
                src=' https://i.imgur.com/SE8uswq.png'
                alt='logox'
              />
              <text style={{fontFamily:"revert-layer",fontWeight:"bold",color:"white",fontSize:25}}>SINDHULI BAZAR</text>
            
           
            </div>
            </Link>
          </Typography>
          <List sx={{ display: 'flex', flexDirection: 'row' }}>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  {item === 'About' ? (
                    <Link
                      to='/about'
                      style={{ textDecoration: 'none', color: '#ffff' }}
                    >
                      <ListItemText primary={item} />
                    </Link>
                  ) : item === 'Contact' ? (
                    <Link
                      to='/contact'
                      style={{ textDecoration: 'none', color: '#ffff' }}
                    >
                      <ListItemText primary={item} />
                    </Link>
                  ) : (
                    <Link
                      to='/'
                      style={{ textDecoration: 'none', color: '#ffff' }}
                    >
                      <ListItemText primary={item} />
                    </Link>
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box sx={{ flexGrow: 1, p: 3, mt: 3 }}>{children}</Box>
    </Box>
  )
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  children: PropTypes.node,
}

export default DrawerAppBar
