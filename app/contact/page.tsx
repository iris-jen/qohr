import {Container} from "@chakra-ui/react/container";
import {Stack} from "@chakra-ui/react/stack";
import {Button, Field, Fieldset, For, Input, NativeSelect, Textarea,} from "@chakra-ui/react"
import type {Metadata} from "next";


export default function ContactPage() {
    return (
        <>
            <Container>

                <Fieldset.Root size="lg" maxW="md">
                    <Stack>
                        <Fieldset.Legend>Contact details</Fieldset.Legend>
                        <Fieldset.HelperText>
                            Please provide your contact details below.
                        </Fieldset.HelperText>
                    </Stack>

                    <Fieldset.Content>
                        <Field.Root>
                            <Field.Label>Name</Field.Label>
                            <Input name="name"/>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Email address</Field.Label>
                            <Input name="email" type="email"/>
                        </Field.Root>

                        <Field.Root>

                            <Field.Label>Message</Field.Label>
                            <Textarea
                                placeholder="What's one thing about LGBT+ health you wish you could improve? What's one thing you could bring to QOHR?"/>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Country</Field.Label>
                            <NativeSelect.Root>
                                <NativeSelect.Field name="country">
                                    <For each={["Canada", "United States"]}>
                                        {(item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        )}
                                    </For>
                                </NativeSelect.Field>
                                <NativeSelect.Indicator/>
                            </NativeSelect.Root>
                        </Field.Root>
                    </Fieldset.Content>


                    <Button type="submit" alignSelf="flex-start">
                        Submit
                    </Button>
                </Fieldset.Root>
            </Container>

        </>
    );
}

export const metadata: Metadata = {
    title: "QOHR - Contact",
};

