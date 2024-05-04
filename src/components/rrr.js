



import React from 'react'

const rrr = () => {
//Start here
    const generateForms = () => {
        const forms = [];
        for (let i = 0; i < selectedValue.noOfFetus; i++) {
          forms.push(
            <div key={i}>
             <div key={i}>
             <Common.CellmaAccordion
            title={"1st Fetus Details"}
            testId=" 1st Fetus Details"
            isExpanded={isAccordion}
            onExpandedIconClick={() => setIsAccordion(!isAccordion)}
          ></Common.CellmaAccordion>

          <Mui.Grid item xs={3}>
            <Common.CellmaAutoSelectField
              dummyData
              options={dummyData.OUTCOME}
              label={t("outcome")}
              ariaLabel="outcome"
              name="outcome"
            />
          </Mui.Grid>

          <Mui.Grid item xs={3}>
            <Common.CellmaInputField
              label={t("gestationWeeks")}
              name="gestationWeeks"
              ariaLabel="gestationWeeks"
            />
          </Mui.Grid>
          <Mui.Grid item xs={3}>
            <Common.CellmaInputField
              label={t("gestationPlusDays")}
              name="gestationPlusDays"
              ariaLabel="gestationPlusDays"
            />
          </Mui.Grid>
          <Mui.Grid item xs={3}>
            <Common.CellmaInputField
              label={t("deliveryMethod")}
              name="deliveryMethod"
              ariaLabel="deliveryMethod"
            />
          </Mui.Grid>
          <Mui.Grid item xs={3}>
            <Common.CellmaDatePicker
              label={t("dateOfDelivery")}
              ariaLabel="dateOfDelivery"
              name="dateOfDelivery"
              value={dateOfDelivery}
              onChange={(newDate: any) => setDateOfDelivery(newDate)}
            />
          </Mui.Grid>
          <Mui.Grid item xs={3}>
            <Common.CellmaDatePicker
              label={t("timeOfDelivery")}
              ariaLabel="timeOfDelivery"
              name="timeOfDelivery"
              value={timeOfDelivery}
              onChange={(newDate: any) => setTimeOfDelivery(newDate)}
            />
          </Mui.Grid>
          <Mui.Grid item xs={3}>
            <Common.CellmaInputField
              label={t("weight")}
              name="weight"
              ariaLabel="weight"
            />
          </Mui.Grid>
          {/* {props.mode !== "assessment" && ( */}
          <Mui.Grid item xs={3}>
            <Common.CellmaAutoSelectField
              dummyData
              options={dummyData.SEX}
              label={t("sex")}
              ariaLabel="sex"
              name="sex"
            />
          </Mui.Grid>
          {/* )} */}
          <Mui.Grid item xs={3}>
            <Common.CellmaInputField
              label={t("babyName")}
              name="babyName"
              ariaLabel="babyName"
            />
          </Mui.Grid>
          <Mui.Grid item xs={3}>
            <Common.CellmaInputField
              label={t("birthPlace")}
              name="birthPlace"
              ariaLabel="birthPlace"
            />
          </Mui.Grid>

          {/* {props.mode !== "assessment" && ( */}
          <Mui.Grid item xs={3}>
            <Common.CellmaAutoSelectField
              dummyData
              options={dummyData.FEEDING_METHOD}
              label={t("feedingMethod")}
              ariaLabel="feedingMethod"
              name="feedingMethod"
            />
          </Mui.Grid>
          {/* )} */}

          {/* {props.mode !== "assessment" && ( */}
          <Mui.Grid item xs={3}>
            <Common.CellmaAutoSelectField
              dummyData
              options={dummyData.SOCIAL_WORKER_ASSIGNED}
              label={t("socialWorkerAssigned")}
              ariaLabel="socialWorkerAssigned"
              name="socialWorkerAssigned"
            />
          </Mui.Grid>
          {/* )} */}
          {/* {props.mode !== "assessment" && ( */}
          <Mui.Grid item xs={3}>
            <Common.CellmaAutoSelectField
              dummyData
              options={dummyData.COMPLICATIONS}
              label={t("complications")}
              ariaLabel="complications"
              name="complications"
            />
          </Mui.Grid>
          {/* )} */}
          {/* {props.mode !== "assessment" && ( */}
          <Mui.Grid item xs={12}>
            <Common.CellmaInputField
              rows="3"
              multiline
              label={t("notes")}
              ariaLabel="notes"
              name="notes"
              placeholder={t("notes")}
            />
          </Mui.Grid>
          </div>
            </div>
          );
        }
        return forms;
      };
      //End here
  return (
    <div>
       {generateForms()}
    </div>
  )
}

export default rrr
