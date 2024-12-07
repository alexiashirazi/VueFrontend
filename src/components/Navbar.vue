<template>
  <div>
    <!-- First Navbar -->
    <CNavbar expand="lg" class="custom-navbar">
      <CContainer fluid>
        <CNavbarBrand href="/" class="custom-brand">APPNAME</CNavbarBrand>
        <CNavbarToggler aria-label="Toggle navigation" aria-expanded="false" @click="visible = !visible"/>
        <CCollapse class="navbar-collapse" :visible="visible">
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" class="custom-link" active>About</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/blog" class="custom-link">Blog</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" :popper="false" class="custom-dropdown">
              <CDropdownToggle class="custom-dropdown-toggle">Home</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="/login">Login</CDropdownItem>
                <CDropdownItem href="#">Global LeaderBoards</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Testimonials</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
          <CForm class="d-flex custom-search">
            <CFormInput type="search" class="me-2 custom-input" placeholder="Search Article"/>
            <CButton type="submit" class="custom-button">Search</CButton>
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
/* Custom Navbar Styling */
.custom-navbar {
  background: linear-gradient(90deg, #ff5e99, #ffde59); /* Pink to Yellow Gradient */
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
}

.custom-brand {
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
}

.custom-brand:hover {
  text-decoration: none;
  color: #fdfdfd;
}

.custom-link {
  color: white;
  font-weight: bold;
  margin-right: 1rem;
}

.custom-link:hover {
  color: #fdfdfd;
  text-decoration: underline;
}

.custom-dropdown-toggle {
  color: white;
  font-weight: bold;
}

.custom-dropdown-toggle:hover {
  color: #fdfdfd;
}

.custom-dropdown .dropdown-menu {
  background: white;
  color: black;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-dropdown .dropdown-menu .dropdown-item:hover {
  background-color: #ffde59;
  color: black;
}

.custom-search {
  align-items: center;
}

.custom-input {
  border-radius: 8px;
  border: 1px solid #ffde59;
  padding: 0.5rem;
}

.custom-input:focus {
  outline: none;
  border-color: #ff5e99;
  box-shadow: 0 0 5px rgba(255, 94, 153, 0.5);
}

.custom-button {
  background: linear-gradient(90deg, #ff5e99, #ffde59);
  color: white;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
}

.custom-button:hover {
  background: linear-gradient(90deg, #ffde59, #ff5e99);
  box-shadow: 0 4px 8px rgba(255, 94, 153, 0.5);
  transform: translateY(-2px);
}
</style>
