import React, { useState } from "react";
import Checkbox from "../Shared//Checkbox";
import { TextField, Button } from '@material-ui/core';
import "./Button.css";

const App = () => {
  const [checkbox1Checked, setCheckbox1Checked] = useState(true);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);
  const [checkbox4Checked, setCheckbox4Checked] = useState(false);
  const [checkbox5Checked, setCheckbox5Checked] = useState(false);
  const [checkbox6Checked, setCheckbox6Checked] = useState(false);

  const [checkbox7Checked, setCheckbox7Checked] = useState(false);
  const [dropdownValue5, setDropdown5Value] = useState("");
  const [dropdownValue2, setDropdown2Value] = useState("");  
  const [dropdownValue, setDropdownValue] = useState("");
  const [dropdownValue3, setDropdown3Value] = useState("");
  const [dropdownValue4, setDropdown4Value] = useState("");

  const [displayDiv, setDisplayDiv] = useState(false);

  const handleButtonClick = () => {
    setDisplayDiv(!displayDiv);
  };

  const handleCheckbox1Change = () => {
    setCheckbox1Checked(!checkbox1Checked);
    setCheckbox2Checked(false);
  };

  const handleCheckbox2Change = () => {
    setCheckbox2Checked(!checkbox2Checked);
    setCheckbox1Checked(false);
  };

  const handleCheckbox3Change = () => {
    setCheckbox3Checked(!checkbox3Checked);
  };
  const handleCheckbox4Change = () => {
    setCheckbox4Checked(!checkbox4Checked);
  };
  const handleCheckbox5Change = () => {
    setCheckbox5Checked(!checkbox5Checked);
  };
  const handleCheckbox6Change = () => {
    setCheckbox6Checked(!checkbox6Checked);
  };
  const handleCheckbox7Change = () => {
    setCheckbox7Checked(!checkbox7Checked);
  };
  const handleDropdown5Change = (event) => {
    setDropdown5Value(event.target.value);
  };
  const handleDropdown2Change = (event) => {
    setDropdown2Value(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };
  const handleDropdown3Change = (event) => {
    setDropdown3Value(event.target.value);
  };
  const handleDropdown4Change = (event) => {
    setDropdown4Value(event.target.value);
  };

  return (
    <div style={{ marginTop: "10px" , marginBottom:"10px"}}>
      <button className={displayDiv ? 'toggle-button active' : 'toggle-button'} onClick={handleButtonClick}>طلاب قدامي / مستجدين</button>
      
      {/* <form onSubmit={handleSubmit}>    </form> */}


      {displayDiv &&      <div style={{ marginTop: "10px" , marginBottom:"20px"}}  className="container">
      
      <h1>طلاب قدامي</h1>
      <p style={{ textAlign: 'right' }}>قم باختيار (قدامى/مستجدين) وملء بياناتك ثم الموافقة على الإقرار بالأسفل<br/>
مع ملاحظة ان الطلاب المستجدين هم طلاب الفرق الأولى أو الاعدادية، الطلاب القدامى هم طلاب مابعد الفرق الأولى أو الاعدادية</p>

      <div className="input-group">
        <Checkbox  
          label="مصري"
          checked={checkbox1Checked}
          onChange={handleCheckbox1Change}
        />
        <Checkbox  
          label="وافد"
          checked={checkbox2Checked}
          onChange={handleCheckbox2Change}
        />
      </div>

      {checkbox2Checked && ( <div className="input-group">
                                <p style={{ marginLeft: "10px" }}> رقم جواز السفر</p>

                            <TextField  required label="الرقم " variant="outlined"size="small"  />
                            <p style={{ marginLeft: "10px" }}>جهة الصدور</p>

                      <TextField  required label="الدولة" variant="outlined"size="small"  />                  
                      <p style={{ marginLeft: "10px" }}>الجنسية</p>

                      <TextField  required label="الجنسية" variant="outlined"size="small"  />
      </div>)}

      {checkbox1Checked && ( <div className="input-group">
      <p style={{ marginLeft: "10px" }}>الرقم القومي</p>

                            <TextField  required label="الرقم القومي" variant="outlined"size="small"  />
                         

      </div>)}

      <div className="input-group">
                            <p style={{ marginLeft: "10px"  }}>كود الطالب</p>
                            <TextField  required label="كود الطالب" variant="outlined" size="small" />

      </div>
        
      <div className="input-group">
        <TextField  required label="الاسم رباعي" variant="outlined" fullWidth  />
        
      </div>

      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>تاريخ الميلاد</p>
        <TextField  required label="التاريخ " variant="outlined"size="small"  />
        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>محل الميلاد</p>
                            <TextField  required label="محل الميلاد" variant="outlined" size="small" />
         
      </div>

      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>النوع</p>
        <select  required
          value={dropdownValue}
          onChange={handleDropdownChange}
        >
           
          
          <option value="option1">ذكر</option>
          <option value="option2">أنثي</option>
        </select>

        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>الديانة</p>
        <select  required
          value={dropdownValue2}
          onChange={handleDropdown2Change}
        >
           
          
          <option value="option1">مسلم</option>
          <option value="option2">مسيحي</option>
          <option value="option3">اخري</option>

        </select>

      </div>

      <div className="input-group">
        <TextField  required label="محل الاقامة 'العنوان بالتفصيل' " variant="outlined" fullWidth  />
        
      </div>

      <div className="input-group">
        <TextField  required label="البريد الالكتروني" variant="outlined" fullWidth  />
        
      </div>

      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>التليفون الارضي</p>
        <TextField  required label="الرقم " variant="outlined"size="small"  />
        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>الهاتف المحمول</p>
                            <TextField  required label="الرقم" variant="outlined" size="small" />
         
      </div>
      {checkbox1Checked && ( <div className="input-group">
        <TextField  required label="اسم الاب رباعي" variant="outlined" fullWidth  />
        
      </div>)}

      {checkbox1Checked && ( <div className="input-group">
      <p style={{ marginLeft: "10px" }}>الرقم القومي للاب</p>

                            <TextField  required label="الرقم القومي" variant="outlined"size="small"  />
                            <p style={{ marginLeft: "10px" , marginRight: "40px" }}>وظيفة الاب</p>
                            <TextField  required label="الوظيفة " variant="outlined" size="small" />
                            <p style={{ marginLeft: "10px" , marginRight: "40px" }}>تليفون الاب</p>
                            <TextField  required label=" الرقم" variant="outlined" size="small" />

      </div>)}

      {checkbox1Checked && (<div className="input-group">
        <TextField  required label="اسم ولي الامر رباعي" variant="outlined" fullWidth  />
        <p style={{ marginLeft: "10px" }}>رقم ولي الامر</p>
        <TextField  required label="الرقم " variant="outlined"size="small"  />
      </div>)}

      {checkbox1Checked && (  <div className="input-group">
        <p style={{ marginLeft: "10px" }}>رقم القومي لولي الامر</p>
        <TextField  required label="الرقم " variant="outlined"size="small"  />
        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>صلة ولي الامر</p>
                            <TextField  required label="الصلة" variant="outlined" size="small" />
         
      </div>
      )}

{checkbox1Checked && (  <div className="input-group">
        <p style={{ marginLeft: "10px" }}>حالة تخص الوالدين</p>
        <select  required
          value={dropdownValue3}
          onChange={handleDropdown3Change}
        >
           
           <option value="option1">-----</option>
          <option value="option2">وفاة الوالد</option>
          <option value="option3">وفاة الوالدين</option>
          <option value="option4">انفصال الوالدين</option>
        </select> 
        </div>  )}

      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>الكلية</p>
        <TextField  required label="الكلية " variant="outlined"size="small"  />
        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>الفرقة</p>
                            <TextField  required label="الفرقة" variant="outlined" size="small" />
         
      </div>
      <div className="input-group">
       
        <p style={{ marginLeft: "10px" }}>تقدير العام الماضي</p>
        <select  required
          value={dropdownValue4}
          onChange={handleDropdown4Change}
        >
           
          
          <option value="option1">مقبول</option>
          <option value="option2">محمل بمواد</option>
          <option value="option3"> غياب بعذر</option>
          <option value="option4">منقول بمادة و بمادة ثانوية</option>
          <option value="option5">ناجح </option>
          <option value="option6">جيد </option>
          <option value="option7">جيد جدا</option>
          <option value="option8">ممتاز </option>
          <option value="option9">منقول بمادة</option>
          <option value="option10">منقول بمادتين</option>
          <option value="option11">راسب </option>
          <option value="option12">دور تاني </option>
          <option value="option13">منقول بمادتين و مادة فرعية</option>

        </select>
        
        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>نسبة التقدير</p>
                            <TextField  required label="النسبة %" variant="outlined" size="small" />

      </div>
      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>السكن في الاعوام السابقة</p>
        <TextField  required label="قديم/مستجد/منقطع " variant="outlined"size="small"  />
        <p style={{ marginLeft: "10px" , marginRight: "100px" }}>نوع السكن</p>
                            <TextField  required label="قديم/مستجد/منقطع" variant="outlined" size="small" />
                            <p style={{ marginLeft: "10px" , marginRight: "100px" }}> </p>
          <Checkbox  required 
          label="سكن بدون تغدية"
          checked={checkbox3Checked}
          onChange={handleCheckbox3Change}
        />
      </div>
      {checkbox1Checked && ( <div className="input-group">
       
        <Checkbox  required style={{ marginLeft: "100px" , marginRight: "170px"}}
          label="الاسرة بالخارج"
          checked={checkbox4Checked}
          onChange={handleCheckbox4Change}
        /> <p style={{ marginLeft: "10px" , marginRight: "170px" }}/>
        <Checkbox  required style={{ marginLeft: "100px" , marginRight: "170px"}}
          label="ذوي احتياجات خاصة"
          checked={checkbox5Checked}
          onChange={handleCheckbox5Change}
        />
      </div>)}
      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>كلمة المرور</p>
        <TextField  required label="password" variant="outlined"size="small"  />
        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>تاكيد كلمة المرور</p>
                            <TextField  required label="Re enter password" variant="outlined" size="small" />
         
      </div>
      
    </div>}


    {!displayDiv && <div style={{ marginTop: "10px" , marginBottom:"20px"}}  className="container">
     
     
    <h1>طلاب مستجدين</h1>
    <p style={{ textAlign: 'right' }}>قم باختيار (قدامى/مستجدين) وملء بياناتك ثم الموافقة على الإقرار بالأسفل<br/>
مع ملاحظة ان الطلاب المستجدين هم طلاب الفرق الأولى أو الاعدادية، الطلاب القدامى هم طلاب مابعد الفرق الأولى أو الاعدادية</p>
     
      <div className="input-group">
        <Checkbox 
          label="مصري"
          checked={checkbox1Checked}
          onChange={handleCheckbox1Change}
        />
        <Checkbox 
          label="وافد"
          checked={checkbox2Checked}
          onChange={handleCheckbox2Change}
        />
      </div>

      {checkbox2Checked && ( <div className="input-group">
                                <p style={{ marginLeft: "10px" }}> رقم جواز السفر</p>

                            <TextField  required label="الرقم " variant="outlined"size="small"  />
                            <p style={{ marginLeft: "10px" }}>جهة الصدور</p>

                      <TextField  required label="الدولة" variant="outlined"size="small"  />                  
                      <p style={{ marginLeft: "10px" }}>الجنسية</p>

                      <TextField  required label="الجنسية" variant="outlined"size="small"  />
      </div>)}

      {checkbox1Checked && ( <div className="input-group">
      <p style={{ marginLeft: "10px" }}>الرقم القومي</p>

                            <TextField  required label="الرقم القومي" variant="outlined"size="small"  />
                         

      </div>)}

      <div className="input-group">
                            <p style={{ marginLeft: "10px"  }}>كود الطالب</p>
                            <TextField  required label="كود الطالب" variant="outlined" size="small" />

      </div>
        
      <div className="input-group">
        <TextField required label="الاسم رباعي" variant="outlined" fullWidth  />
        
      </div>

      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>تاريخ الميلاد</p>
        <TextField required label="التاريخ " variant="outlined"size="small"  />
        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>محل الميلاد</p>
                            <TextField required label="محل الميلاد" variant="outlined" size="small" />
         
      </div>

      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>النوع</p>
        <select required
          value={dropdownValue}
          onChange={handleDropdownChange}
        >
           
          
          <option value="option1">ذكر</option>
          <option value="option2">أنثي</option>
        </select>

        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>الديانة</p>
        <select required
          value={dropdownValue2}
          onChange={handleDropdown2Change}
        >
           
          
          <option value="option1">مسلم</option>
          <option value="option2">مسيحي</option>
          <option value="option3">اخري</option>

        </select>

      </div>

      <div className="input-group">
        <TextField required label="العنوان بالتفصيل(رقم العمارة / اسم الشارع/ المنطقة او الادارة / المحافظة / الدولة) " variant="outlined" fullWidth  />
        
      </div>

      <div className="input-group">
        <TextField required label="البريد الالكتروني" variant="outlined" fullWidth  />
        
      </div>

      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>التليفون الارضي</p>
        <TextField required label="الرقم " variant="outlined"size="small"  />
        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>الهاتف المحمول</p>
                            <TextField required label="الرقم" variant="outlined" size="small" />
         
      </div>
      {checkbox1Checked && ( <div className="input-group">
        <TextField  required label="اسم الاب رباعي" variant="outlined" fullWidth  />
        
      </div>)}

      {checkbox1Checked && ( <div className="input-group">
      <p style={{ marginLeft: "10px" }}>الرقم القومي للاب</p>

                            <TextField  required label="الرقم القومي" variant="outlined"size="small"  />
                            <p style={{ marginLeft: "10px" , marginRight: "40px" }}>وظيفة الاب</p>
                            <TextField  required label="الوظيفة " variant="outlined" size="small" />
                            <p style={{ marginLeft: "10px" , marginRight: "40px" }}>تليفون الاب</p>
                            <TextField  required label=" الرقم" variant="outlined" size="small" />

      </div>)}

      {checkbox1Checked && (<div className="input-group">
        <TextField  required label="اسم ولي الامر رباعي" variant="outlined" fullWidth  />
        <p style={{ marginLeft: "10px" }}>رقم ولي الامر</p>
        <TextField  required label="الرقم " variant="outlined"size="small"  />
      </div>)}

      {checkbox1Checked && (  <div className="input-group">
        <p style={{ marginLeft: "10px" }}>رقم القومي لولي الامر</p>
        <TextField  required label="الرقم " variant="outlined"size="small"  />
        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>صلة ولي الامر</p>
                            <TextField  required label="الصلة" variant="outlined" size="small" />
         
      </div>
      )}

   {checkbox1Checked && (  <div className="input-group">
        <p style={{ marginLeft: "10px" }}>حالة تخص الوالدين</p>
        <select  required
          value={dropdownValue3}
          onChange={handleDropdown3Change}
        >
           
           <option value="option1">-----</option>
          <option value="option2">وفاة الوالد</option>
          <option value="option3">وفاة الوالدين</option>
          <option value="option4">انفصال الوالدين</option>
        </select> 
        </div>  )}
      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>الكلية</p>
        <TextField required label="الكلية " variant="outlined"size="small"  />
         <p style={{ marginLeft: "10px" , marginRight: "170px" }}>الفرقة</p>
                            <TextField label="اعدادي او اولي" variant="outlined" size="small" />
         
      </div>

      <div  className="input-group">
        <p style={{ marginLeft: "10px"  }}>شعبة الثانوية العامة</p>
        <select required
          value={dropdownValue5}
          onChange={handleDropdown5Change}
        >
          <option value="option1">علمي علوم</option>
          <option value="option2">علمي رياضة</option>
          <option value="option3">  ادبي</option>
          <option value="option4">أزهري علمي</option>
          <option value="option5">أزهري ادبي </option>
          <option value="option6">معاهد فنية ثلاث سنوات </option>
          <option value="option7">معاهد فنية اربع سنوات </option>
          <option value="option8">معاهد فنية خمس سنوات </option>
          <option value="option9">دبلومة فنية</option>
          <option value="option10">شهادات معادلة</option>
          <option value="option11">مدارس STEM للعلوم و التكنولوجيا </option>
          <option value="option12">مدارس النيل للعلوم و التكنولوجيا </option>
          <option value="option13">تحويل ورقي</option>

        </select>
        {checkbox1Checked && (<div> <p style={{ marginLeft: "10px", marginRight :"170px"  }}/>
        <Checkbox  required
          label="الثانوية العامة من الخارج"
          checked={checkbox6Checked}
          onChange={handleCheckbox6Change}
        /> </div>)}
        </div>

      
        <div className="input-group">
        <p style={{ marginLeft: "10px" }}>مجموع الثانوية العامة</p>
                            <TextField required label="المجموع" variant="outlined" size="small" />
        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>نسبة التقدير</p>
                            <TextField required label="النسبة %" variant="outlined" size="small" />

      </div>
      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>نوع السكن</p>
                            <TextField required label="قديم/مستجد/منقطع" variant="outlined" size="small" />
                            <p style={{ marginLeft: "10px" , marginRight: "170px" }}> </p>
         <Checkbox required style={{ marginLeft: "100px" , marginRight: "170px"}}
          label="سكن بدون تغدية"
          checked={checkbox3Checked}
          onChange={handleCheckbox3Change}
        />
        
      </div>
       {checkbox1Checked && (<div  className="input-group"> 
          <p style={{ marginLeft: "10px" , marginRight: "170px" }}/>
          <Checkbox required 
          label="الاسرة بالخارج"
          checked={checkbox4Checked}
          onChange={handleCheckbox4Change}
        />
         <p style={{ marginLeft: "10px" , marginRight: "170px" }}> </p>
        <Checkbox required 
          label="ذوي احتياجات خاصة"
          checked={checkbox5Checked}
          onChange={handleCheckbox5Change}
        /> </div>)}
      <div className="input-group">
        <p style={{ marginLeft: "10px" }}>كلمة المرور</p>
        <TextField required label="password" variant="outlined"size="small"  />
        <p style={{ marginLeft: "10px" , marginRight: "170px" }}>تاكيد كلمة المرور</p>
                            <TextField required label="Re enter password" variant="outlined" size="small" />
         
      </div>
      
    </div>}
    <div style={{textAlign:"right" , backgroundColor:"#FFEBA4",border:"solid 1px" ,margin:"auto", padding:"30px" ,borderRadius: "25px",width:"auto"}}>
      <h5>ملحوظات هامة</h5>
      <ul>
        <li>التقدم للمدن الجامعية من خلال استمارة التقديم الالكترونى مجانى بالكامل</li>
        <li>يجب الاحتفاظ بكلمة المرور لأهميتها فى تعديل بياناتك كما سيتم استخدامها لاحقا عند إقامتك بالمدينة</li>
        <li>لوحظ أن العديد من الطلاب يختارون السكن المميز ويجب الإشارة بأن السكن المميز له تكلفة عالية بالنسبة للسكن العادى</li>
        <li>ذوى الاحتياجات الخاصة لا يدخل فى التنسيق</li>
      </ul>
    </div>

       <div style={{ marginTop:"20px" ,margin:"auto" , marginBottom:"20px"}}>
       <Checkbox 
       required
          label="أقر بأن البيانات (محل الإقامة - التقدير - الفرقة/الكلية) صحيحة طبقاً للأوراق الرسمية على أن أقدم هذه الأوراق عند حضوري للمدينة في حالة القبول وإذا ثبت أي خطأ في البيانات يتم تحويلي للشئون القانونية وفصلي نهائياً من المدينة"
          checked={checkbox7Checked}
          onChange={handleCheckbox7Change}
          />
       </div>



    <div style={{marginTop:"20px" , margin: 'auto', width: '40%' }}>
                    <Button  type="submit" variant="contained" color="primary" >التقديم للمدن</Button></div>

    </div>
  );
};

export default App;
