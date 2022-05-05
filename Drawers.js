import react,{ useState } from "react";
import { Drawer } from 'react-native-paper';
import { View } from "react-native";

const Drawers = () => {
    const [active, setActive] = useState('');
    console.log(active);

    const data = [
        {
            label:"First item",
            sname:"first",
            active:"first",
        },
        {
            label:"Second item",
            sname:"second",
            active:"second",
        },
        {
            label:"Third item",
            sname:"Third",
            active:"Third",
        },
        {
            label:"Fourth item",
            sname:"Fourth",
            active:"Fourth",
        },
    ]

    return (
        <View>
            <Drawer.Section title="Some title">
                {
                    data.map((items,key)=>{
                        return (
                       <Drawer.Item
                         key={key}
                        label={items.label}
                        active={active === items.active}
                        onPress={() => setActive(items.sname)}
                        />
                        )
                    })
                }
    </Drawer.Section>
    
        </View>
);
    }

export default Drawers