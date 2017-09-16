import React, { Component } from 'react';
import { Box } form 'react-layout-components'
import { Button  } from 'react-foundation';

export default class Header extends Component {
  render() {
    return (
      <Box justifyContent="space-between" width="100%">
        <Box>
          
        </Box>
        <Box justifyContent="flex-end">
          <Button>Login</Button>
          <Button>Signup</Button>
        </Box>
      </Box>
    );
  }
};
