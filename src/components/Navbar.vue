<template>
    <div>
      <!-- First Navbar -->
      <CNavbar expand="lg" color-scheme="dark" class="bg-dark">
        <CContainer fluid>
          <CNavbarBrand href="/">APPNAME</CNavbarBrand>
          <CNavbarToggler aria-label="Toggle navigation" aria-expanded="false" @click="visible = !visible"/>
          <CCollapse class="navbar-collapse" :visible="visible">
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#" active>About</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="/blog">Blog</CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" :popper="false">
                <CDropdownToggle color="secondary">Home</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="/login">Login</CDropdownItem>
                  <CDropdownItem href="#">Global LeaderBoards</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Testimonials</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink href="#" disabled>     

                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm class="d-flex">
              <CFormInput type="search" class="me-2" placeholder="Search Article "/>
              <CButton type="submit" color="light" variant="outline">Search</CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
      </div>
  
      
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { 
    CNavbar, 
    CContainer, 
    CNavbarBrand, 
    CNavbarToggler, 
    CCollapse, 
    CNavbarNav, 
    CNavItem, 
    CNavLink, 
    CDropdown, 
    CDropdownToggle, 
    CDropdownMenu, 
    CDropdownItem, 
    CDropdownDivider, 
    CForm, 
    CFormInput, 
    CButton 
  } from '@coreui/vue'
  
  const visible = ref(true)
  </script>
  
  <style scoped>
  /* Custom Styles (Optional) */
  </style>
  