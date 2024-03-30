import { HStack, Image, useColorMode } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from '../assets/logo.webp'
import SearchInput from "./SearchInput";

interface Props{
    onSearch: (searchText: string) => void;
}

const Navbar = ({onSearch} : Props) => {
    const { colorMode } = useColorMode();
    const bgColor = { light: "white", dark: "gray.800" }; 
    return(
        // Hstack -horizontal stack
        
        <HStack padding="10px"  bg={bgColor[colorMode]} borderBottom="1px" borderColor={colorMode === "light" ? "gray.200" : "gray.700"}>
            <Image src={logo} boxSize={'60px'} />
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch />
        </HStack>
       
    );
}

export default Navbar;