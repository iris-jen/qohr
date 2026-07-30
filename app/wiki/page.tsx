import {Tabs} from "@chakra-ui/react";
import HealthcareTab from "@/app/wiki/sections/healthcare-tab";
import DiyTab from "@/app/wiki/sections/diy-tab";

export default function WikiPage() {
    return (
        <>
            <Tabs.Root defaultValue="healthcare">
                <Tabs.List>
                    <Tabs.Trigger value="healthcare">
                        Healthcare
                    </Tabs.Trigger>
                    <Tabs.Trigger value="diy">
                        Diy
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="healthcare">
                    <HealthcareTab/>
                </Tabs.Content>
                <Tabs.Content value="diy"><DiyTab/> </Tabs.Content>
            </Tabs.Root>
        </>
    );
}