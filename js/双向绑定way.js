 <div id="objList" class="row" style="padding-left: 10px; padding-right: 10px">
    <div way-repeat="obj.list">
        <div class="col-md-1">
            <button class="btn btn-default btn-block objListCss" attr-index="$$key" way-data="Name"></button>
        </div>
    </div>

</div>

<script type="text/javascript">
    $(document).ready(function () {

        $.post("/obj/QueryList", { top: "10" }, function (data) {
            way.set("obj.list", JSON.parse(data));
        });

        $('#objList').on("click", ".objListCss", function () {
            $("#bg").show();
            $.post("/obj/QueryContent", { id: way.get("obj.list")[$(this).attr('attr-index')].ID }, function (data) {
                $("#bg").hide();
            });
        });

    });
</script> 
