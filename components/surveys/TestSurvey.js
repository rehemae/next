"use client";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import UiButton from "../ui/Button";
import UiInput from "../ui/Input";
import { useEffect, useState } from "react";
import UiSelect from "../ui/Select";
import {
  IncrementPeopleInput,
  IncrementChildrenInput,
  IncrementChildrenU5Input,
} from "../ui/Increment";
import UiArea from "../ui/Area";
import InputMultButtons from "../ui/InputMultButtons";
import Image from "next/image";
import Sign from "../ui/Sign";
import {
  initialState,
  ages,
  genders,
  englishLevels,
  expertises,
  locations,
  users,
} from "./constants";

const TestSurvey = () => {
  const [formState, setFormState] = useState(initialState);

  const router = useRouter();

  useEffect(() => {
    formState.id = window.crypto.randomUUID();
  }, []);

  useEffect(() => {
    if (formState.totalChildren <= 0) {
      return setFormState({ ...formState, children: false });
    }
    return setFormState({ ...formState, children: true });
  }, [formState.totalChildren]);

  useEffect(() => {
    if (formState.lookingJob === "YES") {
      setFormState({ ...formState, isLookingJob: true });
    } else {
      setFormState({ ...formState, isLookingJob: false });
    }
  }, [formState.lookingJob]);

  function submitForm(e) {
    e.preventDefault();

    let surveys = JSON.parse(localStorage.getItem("surveys"));
    surveys.push(formState);
    localStorage.setItem("surveys", JSON.stringify(surveys));
    router.replace("/");
  }
  return (
    <Box margin="auto" p="1em" pb="100px">
      <form onSubmit={submitForm}>
        {/* field for validating if auto id generation is working on frontend  */}

        <UiInput
          type="text"
          disabled
          placeholder={formState.id}
          defaultValue={formState.id}
        />

        <UiSelect
          options={users}
          placeholder="User-ID"
          onChange={(e) =>
            setFormState({ ...formState, uniqueId: e.target.value })
          }
          required
        />

        <UiSelect
          options={locations}
          placeholder="Collection Point"
          onChange={(e) =>
            setFormState({ ...formState, uniqueId: e.target.value })
          }
          required
        />
        <Box>
          <p>Are you interested in learning more about the U4U program ? *</p>
          <Box bg="" className="group-response-buttons">
            <UiButton
              className={formState.continue === true ? "selected" : ""}
              onClick={(e) => setFormState({ ...formState, continue: true })}
            >
              YES
            </UiButton>
            <UiButton
              className={formState.continue === false ? "selected" : ""}
              onClick={(e) => setFormState({ ...formState, continue: false })}
            >
              NO
            </UiButton>
          </Box>
        </Box>

        {formState.continue ? (
          <Box bg="" h="">
            <UiInput
              label="First Name*"
              required
              onChange={(e) =>
                setFormState({ ...formState, fname: e.target.value })
              }
            />
            <UiInput
              label="Middle Name"
              onChange={(e) =>
                setFormState({ ...formState, mname: e.target.value })
              }
            />
            <UiInput
              label="Surname*"
              required
              onChange={(e) =>
                setFormState({ ...formState, sname: e.target.value })
              }
            />
            <UiInput
              label="Phone Number*"
              required
              onChange={(e) =>
                setFormState({ ...formState, phone: e.target.value })
              }
            />
            <UiInput
              label="Email"
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />

            <p>
              Can you tell us about your family members that would travel to the
              US with you? How many people would be in your travel group,
              inclding you?
            </p>
            <p>
              Immediate family members in this process include: the spouse or
              common-law partner of a Ukrainian citizen; and their unmarried
              children under the age of 21.
            </p>
            <p>
              NOTE: If a child is under 18, they must be traveling with a parent
              or legal guardian in order to use this process.
            </p>

            <IncrementPeopleInput
              id="total-people"
              formState={formState}
              setFormState={setFormState}
            />

            <p>
              Of those in your family travel group, how many are children under
              the age of 21?
            </p>

            <IncrementChildrenInput
              id="total-children"
              formState={formState}
              setFormState={setFormState}
            />

            {formState.children ? (
              <Box>
                <p>Additionally, how many are children under the age of 5?</p>

                <p>
                  NOTE: If a child is under 18, they must be traveling with a
                  parent or legal guardian in order to use this process.
                </p>

                <IncrementChildrenU5Input
                  id="total-childrenU5"
                  formState={formState}
                  setFormState={setFormState}
                />
              </Box>
            ) : null}

            <Box>
              <p>
                Do you have family members outside of your immediate family
                (e.g. your spouse, partner or children) that you&apos;d like to
                travel with you to the United States?
              </p>

              <InputMultButtons
                formState={formState}
                data={"membersOutside"}
                setFormState={setFormState}
              />
            </Box>

            <Box>
              <p>
                Did you and your family reside in Ukraine immediately prior to
                the Russian invasion (until February 11, 2022) and were
                displaced as a result of the invasion?
              </p>

              <InputMultButtons
                formState={formState}
                data={"priorInv"}
                setFormState={setFormState}
              />
            </Box>

            <Box>
              <p>
                Are you and your family Ukrainian citizens and possess valid
                Ukrainian passports (or are a child included on a parent&lsquo;s
                passport), or are a non-Ukrainian immediate family member of a
                Ukrainian citizen?
              </p>

              <InputMultButtons
                formState={formState}
                data={"ukranian"}
                setFormState={setFormState}
              />
            </Box>

            <Box>
              <p>Are you interested in finding a job and working in the US?</p>

              <InputMultButtons
                formState={formState}
                data={"lookingJob"}
                setFormState={setFormState}
              />

              {formState.isLookingJob === true ? (
                <UiSelect
                  placeholder="What is your field of expertise?"
                  options={expertises}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      fieldExpertise: e.target.value,
                    })
                  }
                  required
                />
              ) : null}

              {formState.fieldExpertise === "Other" ? (
                <UiInput
                  label="Other employment"
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      otherEmployment: e.target.value,
                    })
                  }
                />
              ) : null}
            </Box>

            <Box>
              <UiSelect
                placeholder="Can you please tell us your English profieciency level ?"
                options={englishLevels}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    englishLevel: e.target.value,
                  })
                }
                required
              />
            </Box>

            <Box bg="">
              <p>Do you have pets? *</p>
              <Box className="group-response-buttons">
                <UiButton
                  className={formState.pets === true ? "selected" : ""}
                  onClick={(e) => setFormState({ ...formState, pets: true })}
                >
                  YES
                </UiButton>
                <UiButton
                  className={formState.pets === false ? "selected" : ""}
                  onClick={(e) => setFormState({ ...formState, pets: false })}
                >
                  NO
                </UiButton>
              </Box>
            </Box>

            {formState.pets ? (
              <Box>
                <p>
                  Applicants without pets will have a much higher chance of
                  finding housing in the US. If we were not able to accommodate
                  your pet, would you still be interested in the program?
                </p>

                <InputMultButtons
                  formState={formState}
                  data={"noPetStillInterested"}
                  setFormState={setFormState}
                />
              </Box>
            ) : null}

            <Box>
              <UiSelect
                placeholder="What gender do you identify with?"
                options={genders}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    gender: e.target.value,
                  })
                }
                required
              />
            </Box>

            <Box>
              <UiSelect
                placeholder="What age group do you belong to?"
                options={ages}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    ageRange: e.target.value,
                  })
                }
                required
              />
            </Box>

            <Box>
              <p>
                If you agree with the Personal Data Use Agreement (you can
                access it by scanning the QR code), please sign in the space
                below:
              </p>

              <Box maxW="100vw">
                <Sign />
              </Box>

              <Box
                position="relative"
                w="60vw"
                h="60vw"
                m="auto"
                className="qr-image"
              >
                <Image
                  src="https://drive.google.com/uc?id=1gV7O1ir-hc18tg1V8H5e9LMOjA5IzT0f"
                  alt="qr-personal-data-agreement"
                  fill
                />
              </Box>
            </Box>

            {/*   <IncrementInput
              id=""
              formState={formState}
              incrementPeople={incrementPeople}
              decrementPeople={decrementPeople}
            /> */}
          </Box>
        ) : null}

        {!formState.continue ? (
          <Box bg="" height="300px">
            <UiArea
              label="Please explain why you aren't interested in the program? *"
              required
              onChange={(e) =>
                setFormState({ ...formState, notParticipate: e.target.value })
              }
            />
          </Box>
        ) : null}

        <Box
          bg="white"
          display="flex"
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          justifyContent="center"
        >
          <UiButton onClick={() => router.replace("/")}>Cancel</UiButton>
          <UiButton type="submit">Save</UiButton>
        </Box>
      </form>
    </Box>
  );
};

export default TestSurvey;
