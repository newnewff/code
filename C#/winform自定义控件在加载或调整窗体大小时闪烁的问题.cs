//winform custom control load or change form size ,bring Flashing!
//解决方案：
//在调用用户控件的窗体里面添加以下代码：

protected override CreateParams CreateParams
{
     get {
         CreateParams cp = base.CreateParams;
         cp.ExStyle |= 0x02000000; // Turn on WS_EX_COMPOSITED
         return cp;
     }
}
